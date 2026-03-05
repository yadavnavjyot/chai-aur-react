import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const addValue = () => {
    console.log("Clicked", Math.random());
    setCount(count + 1)
  }

  const subValue = () => {
    if(count === 0) return
    setCount(count - 1) 
  }

  return (
    <>
       <h1>Chai aur react !!!</h1>
       <h2>Counter Value : {count}</h2>

       <button onClick={addValue}>Add value</button>
       <br />
       <button onClick={subValue}>Subtract value</button>
    </>
  )
}

export default App
