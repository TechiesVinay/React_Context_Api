import React, { useContext } from 'react';
import { CounterContext } from './CounterProvider';

const Counter = () => {
  const { count, dispatch } = useContext(CounterContext);

  return (
    <div> 
      <h1>This is my first page </h1>
      <button onClick={() => dispatch("Increment")}>Increment +</button>
      <button onClick={() => dispatch("Decrement")}>Decrement -</button>
      <h2>{count}</h2>
    </div>
  );
};

export default Counter;
