import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Welcome from "./components/Welcome.jsx";
// const obj = {
//   name: "Sudhir",
// };

// const H1 = (
//   <div>
//     <h1>Welcome {obj.name}</h1>
//     <p>
//       Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate iste{" "}
//       {4854 + 4}
//     </p>
//     {/*
//     <input type="text" placeholder="Enter text here..."></input>*/}

//     <input type="text" placeholder="Enter text here..." />
//   </div>
// );

function myFn() {
  console.log("Sudhir");
}


createRoot(document.getElementById("root")).render(
  <div>
    <button onClick={myFn}>Submit</button>
    <button
      onClick={() => {
        console.log("Sudhir Kumar");
      }}
    >
      Submit
    </button>

    <Welcome />
  </div>
);
