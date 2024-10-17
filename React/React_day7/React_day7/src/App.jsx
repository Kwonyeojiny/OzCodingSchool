
import { Component, useState } from 'react'
import './App.css'

function App () {
  const[showCounter,setShowCounter] = useState(false);
  return (
    <>
      {showCounter && <Counter/>}
      <br/>
      <button onClick={()=> setShowCounter((prev)=> !prev)}>show?</button>
    </>
  )
}

class Counter extends Component {
  constructor() {
    super();
    this.state = { counter : 1 }
    console.log('constructor')
  }
  componentDidMount() {
    console.log('DidMount')
  }

  componentDidUpdate() {
    console.log('DidUpdate')
  }

  componentWillUnmount() {
    console.log('WillUnmount')
  }

  render () {
    console.log('render')
    return (
      <>
        <div>counter : {this.state.counter}</div>
        <button onClick={()=> this.setState({conter : this.state.counter+1})}>+1</button>
      </>
    )
  }
}

// function App() {

//   return (
//     <>
      
//     </>
//   )
// }

export default App
