import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function App() {
    const [brendon, setBrendon] = useState([])
    const brendonClick = () => {
      axios.post('http://127.0.0.1:5000/predict', {
        ticker: 'NIO'
      })
      .then((response) => {
        console.log(response)
        setBrendon(response.data);
      }, (error) => {
        console.log(error);
      });
    }
    return (
      <>
    <div>
      <button className='btn' onClick={() => brendonClick()}>Brendon..</button>
    </div>
    <div>
      <p>{brendon}</p>
    </div>
    </>
    )
  }


