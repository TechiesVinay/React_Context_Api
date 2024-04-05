import React, { createContext, useContext, useReducer } from 'react';

// Create context
const CounterContext = createContext();

// Create provider component
export const CounterProvider = ({ children }) => {
  const initialState = 0;
  const reducer = (state, action) => {
    switch(action) {
      case "Increment":
        return state + 1;
      case "Decrement":
        return state - 1;
      default:
        return state;
    }
  };

  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <CounterContext.Provider value={{ count, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};
