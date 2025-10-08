
import "./App.css";
import ShowFruits from "./components/ShowFruits";
import AddFruit from "./components/AddFruit";
import FruitProvider from "./context/MyContext";

function App() {
  return (
    <FruitProvider>
      <h2>Fruits</h2>
      <AddFruit />
      <ShowFruits />
    </FruitProvider>
  );
}

export default App;
