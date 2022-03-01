import React, {useState} from 'react';
import axios from 'axios';

export default function App() {
    const [brendon, setBrendon] = useState([])
    const [benny, setBenny] = useState({
      
      
    }) 

    const brendonClick = () => {
      axios.post('http://127.0.0.1:5000/predict', benny || {"ticker": 'NIO'})
      .then((response) => {
        console.log(response)
        setBrendon((oldList) =>
        {
          let newList = JSON.parse(JSON.stringify(oldList))
          newList.push(response.data)
          return  newList
        })  
      }, (error) => {
        console.log(error);
      })
      
    }

    const handleChange = (e, key) => {
        //SetShahar(gay=true)
        setBenny((oldBenny) => {
          return {   
          ... oldBenny,
          key: e.target.value
        }
        })
        
      }
  
    

    return (
      <>
    <div>
      <button className='btn' onClick={() => brendonClick()}>Brendon..</button>
    </div>
    <div>
      {brendon.map((item, index) => {
        return <p key={index}> {item}</p>
      })}
    </div>
 
    <input type="text"  onChange={(e) => handleChange(e, 'ticker')} />
    {/* <input type="text"  onChange={handleChange()} /> */}
    </>
    )
  
  }

