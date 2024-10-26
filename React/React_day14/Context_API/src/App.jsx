import { useContext } from "react";
import "./App.css";
import { useCounter } from "./context/counterContext";

function App() {
  const [counter, Setcounter] = useCounter();

  return (
    <>
      <div>counter:{counter}</div>
      <button
        onClick={() => {
          Setcounter((prev) => prev + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          Setcounter((prev) => prev - 1);
        }}
      >
        -
      </button>
    </>
  );
}

export default App;
