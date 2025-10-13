import { useRef, useState } from "react";
import "./App.css";

function App() {
  // const count = useRef(0);
  // const [stateCount, setCount] = useState(0);

  const userIdRef = useRef();
  const passwordRef = useRef();

  const handleOnSubmit = (event) => {
    event.preventDefault();
    console.log(userIdRef.current.value);
    console.log(passwordRef.current.value);
    userIdRef.current.value = "";
    passwordRef.current.value = "";
  };

  return (
    <>
      <form onSubmit={handleOnSubmit}>
        User ID: <input type="text" ref={userIdRef} /> <br />
        Password: <input type="password" ref={passwordRef} /> <br />
        <input type="submit" value="Login" />
      </form>
    </>

    // <>
    //   <input type="text" ref={inputRef} />
    //   <button
    //     onClick={() => {
    //       console.log(inputRef.current.value);
    //     }}
    //   >
    //     Click
    //   </button>
    // </>
    // <>
    //   <h1>{count.current}</h1>

    //   <button
    //     onClick={() => {
    //       count.current += 1;
    //       console.log(count.current);
    //     }}
    //   >
    //     +
    //   </button>

    //   <hr />
    //   <h1>{stateCount}</h1>

    //   <button
    //     onClick={() => {
    //       setCount(stateCount + 1);
    //       console.log(stateCount);
    //     }}
    //   >
    //     +
    //   </button>
    // </>
  );
}

export default App;
