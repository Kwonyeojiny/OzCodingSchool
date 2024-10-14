//import { useState } from 'react'
import { Component } from 'react'
import './App.css'

// function App() {
//   const[counter,setCounter] = useState(0)
//   return (
//     <>
//       <div>counter : {counter}</div>
//       <button 
//         onClick={()=>{
//           setCounter((prev)=> prev+1)
//           // setCounter(counter + 1)
//         }}>+</button>
//       <button 
//         onClick={()=>{
//           setCounter((prev)=> prev-1)
//           // setCounter(counter - 1)
//         }}>-</button>
//     </>
//   )
// }

class App extends Component {
  state = {counter:0};
  render(){
    return(
      <>
        <div>counter {this.state.counter}</div>
        <button 
        onClick={()=>{
          this.setState({counter : this.state.counter + 1})
        }}>+</button>
      <button 
        onClick={()=>{
          this.setState({counter : this.state.counter - 1})
        }}>-</button>
      </>
    );
  }
}

export default App
