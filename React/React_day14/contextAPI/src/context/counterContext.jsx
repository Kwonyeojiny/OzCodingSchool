import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const counterContext = createContext();

export const CounterProvider = ({ children }) => {
  const [counter, setCounter] = useState(0);
  return (
    <counterContext.Provider value={{ counter, setCounter }}>
      {children}
    </counterContext.Provider>
  );
};

export const useCounter = () => {
  return useContext(counterContext);
};
