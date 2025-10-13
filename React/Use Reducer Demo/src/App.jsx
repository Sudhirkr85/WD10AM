import { useReducer, useRef } from "react";

import "./App.css";

function App() {
  function reducer(state, action) {
    switch (action.type) {
      case "inc":
        return state + 1;
      case "dec":
        return state - 1;

      case "add":
        return state + action.payload;
      case "sub":
        return state - action.payload;
      case "mul":
        return state * action.payload;
      default:
        return 0;
    }
  }

  const [state, dispatch] = useReducer(reducer, 0);

  const inputRef = useRef(null);

  return (
    <>
      <h1>Counter: {state}</h1>
      <input type="text" ref={inputRef} required />
      <button onClick={() => dispatch({ type: "inc" })}>Increment</button>
      <button onClick={() => dispatch({ type: "dec" })}>Decrement</button>
      <button
        onClick={() =>
          dispatch({ type: "add", payload: Number(inputRef.current.value) })
        }
      >
        Add
      </button>
      <button
        onClick={() =>
          dispatch({ type: "sub", payload: Number(inputRef.current.value) })
        }
      >
        Subtract
      </button>
      <button
        onClick={() =>
          dispatch({ type: "mul", payload: Number(inputRef.current.value) })
        }
      >
        X
      </button>
      <button onClick={dispatch}>Reset</button>
    </>
  );
}

export default App;
