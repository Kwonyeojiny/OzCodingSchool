import { useState } from 'react'

import './App.css'

function App() {
  const [number, setNumber] = useState(0)
  const [array, setArray] = useState([])
  const [i,setI] = useState(0)
  console.log('rerendering')

  const handler = () =>{
    setNumber(number + 1)
    //const newArray = array.slice()
    const newArray = [...array]
    setI(i+1)
    newArray.push(i+1)
    setArray(newArray)
  }

  return (
    <>
      <div>number : {number}</div>
      <div>array : [{array.join(',')}]</div>
      <button onClick={handler}>상태 업데이트!</button>
    </>
  )
}

export default App
