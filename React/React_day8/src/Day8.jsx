// import { useRef, useState } from 'react';
// import './App.css'

// function App() {

//   return (
//     <>

//       <ControlledInput/>
//       <br/><br/>
//       <UseRefInput/>
//       <br/><hr/><br/>
//       <Counter/>
//     </>
//   )
// }

// export default App;


// const Counter = () => {
//   const [counter, setCounter] = useState(0)
//   const numberRef = useRef(null)

//   return (
//     <>
//       <div>counter : {counter}</div>
//       <button onClick={()=> setCounter(prev => prev+1)} >+</button>
//       <button onClick={()=> setCounter(prev => prev-1)} >-</button>
//       <br/><br/>
//       <button onClick={()=> numberRef.current = counter} >Keep Value</button>
//       <button onClick={()=>console.log(numberRef.current)} >Show Value</button>
//     </>
//   )
// }


// const UseRefInput = () => {
//   const inputRef = useRef(null)
//   const getInputValue = () => {
//     console.log(inputRef.current.value) // == document.querySelector('input').value
//   }

//   const focusInput = () => {
//     inputRef.current.focus()
//   }

//   return (
//     <>
//       <input ref={inputRef}/> <br/>
//       <button onClick={getInputValue} >input 값 가져오기</button> 
//       <br/><br/>
//       <button onClick={focusInput}>focus</button>
//     </>
//   )
// }

// const ControlledInput = () => {
//   const [inputValue, setInputValue] = useState('')

//   console.log('ControlledInput')

//   return (
//     <input 
//       value={inputValue} 
//       onChange={(e)=> setInputValue(e.target.value)}
//     />
//   )
// }