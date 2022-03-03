import React, {useState} from 'react';

import Watchlist from './Components/OutputAndItsGarbage.js';
import InputAndTheierGarbage from './Components/InputAndTheirGarbage.js';


export default function App() {
  
  const [benny, setBenny] = useState({}) 
  const [brendon, setBrendon] = useState([])
    return (
    <>
      <Watchlist active={benny} setAll={setBrendon} all={brendon} />
      <InputAndTheierGarbage active={setBenny}/>

    </>
    )
  
  }

