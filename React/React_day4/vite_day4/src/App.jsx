import { useState } from 'react'
//import { Component } from 'react'
import './App.css'

function App() {
  const[counter,setCounter] = useState(0)
  const[inputValue, setInputValue] = useState(1)

  const incrementCounter = () => {
    setCounter(counter + 1)
  }

  const decrementCounter = () => {
    setCounter(counter - 1)
  }

  const setCounterNumber = () => {
    setCounter(inputValue)
  }

  return (
    <>
      <Count counter={counter} hello={"hello"} array={[1,2,3,"안녕하세요"]}/>
      <PlusButton setCounter={setCounter} incrementCounter={incrementCounter}/>
      <MinusButton setCounter={setCounter} decrementCounter={decrementCounter} />
      <CounterInput inputValue={inputValue} setInputValue={setInputValue} setCounter={setCounter} setCounterNumber={setCounterNumber}/>
    </>
  )
}

function CounterInput({inputValue, setInputValue, setCounter, setCounterNumber}){
  return(
    <>
      <input 
        type='number' 
        value={inputValue} 
        onChange={(e)=>setInputValue(e.target.value)}/>
      <button 
        // onClick={
        // ()=> setCounter(inputValue)}
        onClick={setCounterNumber}
         >입력</button>
    </>
  )
}

function PlusButton({setCounter, incrementCounter}){
  return (
    <button 
      // onClick={()=>{
      //   setCounter((prev) => prev + 1 )
      // }}
      onClick={incrementCounter}
    >+</button>
  )
}

function MinusButton({setCounter, decrementCounter}){
  return (
    <button 
      // onClick={()=>{
      //   setCounter((prev) => prev - 1 )
      // }}
      onClick={decrementCounter}
    >-</button>
  )
}

function Count ({counter}){
  return <div>counter : {counter}</div>
}

// class App extends Component {
//   state = {counter:0};

//   incrementCounter = () => {
//     this.setState({counter: this.state.counter +1})
//   }
//   decrementCounter = () => {
//     this.setState({counter: this.state.counter -1})
//   }

//   render(){
//     return(
//       <>
//         <Count counter={this.state.counter}/>
//         <PlusButton incrementCounter={this.incrementCounter}/>
//         <MinusButton/>
//       </>
//     );
//   }
// }

// class PlusButton extends Component {
//   render(){
//     return (
//       <button 
//         onClick={
//           this.props.incrementCounter
//         }>+</button>
//     )
//   }
// }

// class MinusButton extends Component {
//   render(){
//     return (
//       <button 
//         onClick={
//           this.props.decrementCounter
//         }>-</button>
      
//     )
//   }
// }

// class Count extends Component{
//   // constructor(props){
//   //   super(props)
//   // }

//   render(){
//     return <div>counter : {this.props.counter}</div>
//   }
// }

export default App
