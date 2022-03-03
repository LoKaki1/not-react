import React from 'react';
import axios from 'axios';
import './components.css'

const contains_object = (oldList, benny, t) => {
    for(let i = 0; i < oldList.length; i++) {
      if (oldList[i].ticker==benny.ticker && oldList[i].price==t.price) {
        return true
      }
    }
    return false
}


export default function ParametersInput(props) {
    const handleChange = (e, key) => {
      console.log(key)
      props.setActive((oldBenny) => {
        return { 
        ...oldBenny,  
        [`${key}`]: e.target.value
      }
      })
        
    }
    const predictStock = () => {
        axios.post('http://127.0.0.1:5000/predict', props.active || {"ticker": 'NIO'})
        .then((response) => {
          console.log(response)
          props.setAll((oldList) =>
          {
            let newList = JSON.parse(JSON.stringify(oldList))
            let newData = {
                            'ticker': props.active.ticker,
                            'price': response.data.price,
                            'lastPrice': response.data.current_price
                          }
            console.log(response.data)
            if (!contains_object(oldList, props.active, newData)){
              newList.push(newData)
            }
            else
        console.log(`ticker already in local database ${newData.ticker}`)
            console.log(newData)
            return  newList
          })  
        }, (error) => {
          console.log(error);
        })
        
    }
    return (
    <>
        <div class='divs'>

            <form className="bar">
                <input className='searchbar' type="text" onChange={(e) => handleChange(e, 'ticker')} placeholder='Enter ticker..' style={{}}/>
            </form>
            <button class='submit'onClick={() => predictStock()}>
                Predict 🚀   
            </button>
 
        </div>
        {/* <input type="text"  onChange={(e) => handleChange(e, 'epochs')} placeholder='Enter epochs..'/> 
            <input type="text"  onChange={(e) => handleChange(e, 'units')} placeholder='Enter units..'/> 
            <input type="text"  onChange={(e) => handleChange(e, 'prediction_days')} placeholder='Enter prediction days..'/> 
            <input type="text"  onChange={(e) => handleChange(e, 'predicition_day')} placeholder='Enter prediction day..'/>  */}
        <div>
            {props.all.map((item, index) => {
            return <p key={index}> {item.ticker} price is - {item.price}</p>
            })}
        </div>
    </>
    )
}