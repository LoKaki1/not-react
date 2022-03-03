import React from 'react';
import './components.css'
export default function InputAndTheierGarbage(props) {
    const handleChange = (e, key) => {
      console.log(key)
      props.active((oldBenny) => {
        return { 
        ...oldBenny,  
        [`${key}`]: e.target.value
      }
      })
        
    }
    return (
    <div>
        
        <form className="bar">
            <input className='searchbar' type="text" onChange={(e) => handleChange(e, 'ticker')} placeholder='Enter ticker..' style={{}}/>
        </form>
        <input type="text"  onChange={(e) => handleChange(e, 'epochs')} placeholder='Enter epochs..'/> 
        <input type="text"  onChange={(e) => handleChange(e, 'units')} placeholder='Enter units..'/> 
        <input type="text"  onChange={(e) => handleChange(e, 'prediction_days')} placeholder='Enter prediction days..'/> 
        <input type="text"  onChange={(e) => handleChange(e, 'predicition_day')} placeholder='Enter prediction day..'/> 
    </div>
    )
}

// div class="bar">
//       <input class="searchbar" type="text" title="Search">
//       <a href="#"> <img class="voice" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Google_mic.svg/716px-Google_mic.svg.png" title="Search by Voice"></a>
//     </div>