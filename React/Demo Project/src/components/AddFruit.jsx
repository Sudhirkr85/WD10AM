import { useRef } from "react";
import { useFruits } from "../context/MyContext";


function AddFruit() {
  const { saveFruit } = useFruits();
  const ob=useFruits()


  const fruitRef = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    saveFruit(fruitRef.current.value);
    fruitRef.current.value = "";
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label htmlFor="fruit">Fruit Name</label>
      <input type="text" id="fruit" ref={fruitRef} />
      <button type="submit">Add</button>
    </form>
  );
}
export default AddFruit;
