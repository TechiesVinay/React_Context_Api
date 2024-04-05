import React, { createContext, useContext, useReducer } from 'react';

// Create context
export const CounterContext = createContext();

// Create provider component
export const CounterProvider = ({ children }) => {
  const initialState = 0;
  const reducer = (state, action) => {
    if(action ===  "Increment"){
        return state + 1
      }
      else if(action === "Decrement"){
        return state -1
      }
      else {
        return state
      }
  };

  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <CounterContext.Provider value={{ count, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};
