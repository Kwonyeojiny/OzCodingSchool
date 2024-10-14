import { useState } from 'react'
//import { Component } from 'react'
import './App.css'

function App() {
  const[counter,setCounter] = useState(0)
  return (
    <>
      <Count counter={counter} hello={"hello"} array={[1,2,3,"안녕하세요"]}/>
      <button 
        onClick={()=>{
          setCounter((prev)=> prev+1)
          // setCounter(counter + 1)
        }}>+</button>
      <button 
        onClick={()=>{
          setCounter((prev)=> prev-1)
          // setCounter(counter - 1)
        }}>-</button>
    </>
  )
}

function Count ({array, counter, hello}){
  console.log("array", array);
  console.log("counter",counter);
  console.log("hello",hello);
  return <div>counter : {counter}</div>
}

// class App extends Component {
//   state = {counter:0};
//   render(){
//     return(
//       <>
//         <Count counter={this.state.counter}/>
//         <button 
//         onClick={()=>{
//           this.setState({counter : this.state.counter + 1})
//         }}>+</button>
//       <button 
//         onClick={()=>{
//           this.setState({counter : this.state.counter - 1})
//         }}>-</button>
//       </>
//     );
//   }
// }

// class Count extends Component{
//   // constructor(props){
//   //   super(props)
//   // }

//   render(){
//     console.log("props",this.props)
//     return <div>counter : {this.props.counter}</div>
//   }
// }

export default App
