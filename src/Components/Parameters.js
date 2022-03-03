import React, {useState} from 'react';
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
    const [load, setLoad] = useState(false, [])
    const loader = <div className='loader'/>
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
        setLoad(true)
        axios.post('http://127.0.0.1:5000/predict', props.active || {"ticker": 'NIO'})
        .then((response) => {
          console.log(response)
          props.setAll((oldList) =>
          {
            let newList = JSON.parse(JSON.stringify(oldList))
            let newData = {
                            'id': response.data.id,
                            'ticker': props.active.ticker,
                            'price': response.data.price,
                            'lastPrice': response.data.current_price
                          }
            console.log(response.data)
            if (!contains_object(oldList, props.active, newData))
                newList.push(newData)       
            else
                console.log(`ticker already in local database ${newData.ticker}`)
            console.log(newData)
            setLoad(false)
            return  newList
          })  
        }, (error) => {
          console.log(error);
        })
        
    }
  
    return (
    <>
        <div className='divs'>
        <div>
                <button className='submit'onClick={() => predictStock()}>
                    Predict 🚀   
                </button>
                {load ? loader: <div></div>}
            </div>
            <form className="bar">
                <input className='searchbar' type="text" onChange={(e) => handleChange(e, 'ticker')} placeholder='Enter ticker..' style={{}}/>
            </form>

 
        </div>
        {/* <input type="text"  onChange={(e) => handleChange(e, 'epochs')} placeholder='Enter epochs..'/> 
            <input type="text"  onChange={(e) => handleChange(e, 'units')} placeholder='Enter units..'/> 
            <input type="text"  onChange={(e) => handleChange(e, 'prediction_days')} placeholder='Enter prediction days..'/> 
            <input type="text"  onChange={(e) => handleChange(e, 'predicition_day')} placeholder='Enter prediction day..'/>  */}
    </>
    )
}