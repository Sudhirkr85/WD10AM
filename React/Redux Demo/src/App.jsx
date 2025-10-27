import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { decrement, increment, reset } from "./counterSlice";

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Counter App</h1>
      <h1> {counter}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </>
  );
}

export default App;
