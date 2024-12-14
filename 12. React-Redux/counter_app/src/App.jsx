import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./redux/counterSlice";

function App(){
  // get the current counter value from the Redux store
  const counter = useSelector((state) => state.counter.value);

  // get the dispatch function to dispatch actions
  const dispatch = useDispatch();
  
  return(
    <div className="App">
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
}

export default App;