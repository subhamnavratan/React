import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter]=useState(15);
  /* counter is a vale and setCounter ia a function*/
/*let counter =15;*/
 const Addvalue =()=>{
  console.log("add value",counter);
  counter=counter+1;
  setCounter(counter);
 }
 const removeVal=()=>{
  counter=counter-1;
  setCounter(counter);
 }
  return (
    <>
      <h2>Hello ! This is a project that add 1 and remove 1 after add and remove respectively
        
</h2>
      <h3>conter value:{counter}</h3>
      
      <button onClick={Addvalue}>Add value: {counter}
 
      </button>
      <br />
      <button onClick={removeVal}> Remove value:{counter}</button>
    </>
  )
}

export default App
