import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { subtract ,add} from './assets/components/add'

function App() {
  console.log(subtract(5,2));
  console.log(add(10,3));
}
  const count=()=>{
    const [count,setCount]=useState(0)
    console.log(count);
      function handleClick(){
        count=count+1;
        console.log("Clicked")
    
      }
      console.log(CustomStateSet,"after clicked")
    
  }


  return (
    <>
    <navbar/>
    <div>this is app document</div>
    <count/>
    <button onClick={handleClick}>click</button>
    
    
    </>
  )


export default count
