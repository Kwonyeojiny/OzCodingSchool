import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";

const increment1 = {
  type: "increment1",
};

const decrement1 = {
  type: "decrement1",
};

const increment2 = {
  type: "increment2",
};

const decrement2 = {
  type: "decrement2",
};

const counter1Reducer = (state = 0, action) => {
  switch (action.type) {
    case "increment1":
      return state + 1;
    case "decrement1":
      return state - 1;
    default:
      return state;
  }
};

const counter2Reducer = (state = 10, action) => {
  switch (action.type) {
    case "increment2":
      return state + 1;
    case "decrement2":
      return state - 1;
    default:
      return state;
  }
};

const rootReducer = combineReducers({ counter1Reducer, counter2Reducer });
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

function App() {
  const counter1 = useSelector((state) => state.counter1Reducer);
  const counter2 = useSelector((state) => state.counter2Reducer);
  const dispatch = useDispatch();

  return (
    <>
      <div>Counter: {counter1}</div>
      <button
        onClick={() =>
          dispatch((dispatch) => {
            setTimeout(() => {
              dispatch(increment1);
            }, 1000);
          })
        }
      >
        +
      </button>
      <button
        onClick={() =>
          dispatch((dispatch) => {
            setTimeout(() => {
              dispatch(decrement1);
            }, 1000);
          })
        }
      >
        -
      </button>
      <div>Counter: {counter2}</div>
      <button onClick={() => dispatch(increment2)}>+</button>
      <button onClick={() => dispatch(decrement2)}>-</button>
    </>
  );
}

export default App;
