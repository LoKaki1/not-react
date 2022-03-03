import React, {useState} from 'react';
import ParametersInput from './Components/Parameters.js';

export default function App() {
  
  const [benny, setBenny] = useState({}) 
  const [brendon, setBrendon] = useState([])
    return (
    <>
      <ParametersInput active={benny}  all={brendon} setAll={setBrendon} setActive={setBenny}/>
    </>
    )
  
  }

