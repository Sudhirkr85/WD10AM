import "./App.css";
import Wish from "./components/Wish";
import ChildComp from "./components/Child";
function App() {
  // const obj = {
  //   id: 1,
  //   name: "Sudhir",
  // };

  return (
    <>
      <ChildComp>
        <h1>Sudhir</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed
          doloribus possimus magni cupiditate, ratione temporibus numquam nemo
          consequuntur, qui, nam voluptatem molestias. Dolorum adipisci omnis
          eum optio maxime? Ex, saepe?
        </p>
        
      </ChildComp>

      {/* <Wish name="Sudhir" msg="Good Moring" />
      <Wish name="Satya" /> */}

      {/* <Wish name="Sudhir" msg="Good Moring" obj={obj} /> */}
      {/* <Wish name="Satya" msg="Good Afternoon" /> */}
    </>
  );
}

export default App;
