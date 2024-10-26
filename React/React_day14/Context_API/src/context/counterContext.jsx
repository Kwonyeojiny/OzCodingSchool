import { createContext, useState, useContext } from "react";

const counterContext = createContext();

export function CounterProvider({ children }) {
  const [counter, setCounter] = useState(0);
  return (
    <counterContext.Provider value={[counter, setCounter]}>
      {children}
    </counterContext.Provider>
  );
}

export function useCounter() {
  return useContext(counterContext);
}
