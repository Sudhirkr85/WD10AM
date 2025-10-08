import { useFruits } from "../context/MyContext";

function Fruit() {
  const { fruits, deleteFruit } = useFruits();
  return (
    <>
      {fruits.map((fruit, i) => (
        <li key={i}>
          {fruit} <button onClick={() => deleteFruit(fruit)}>Delete</button>
        </li>
      ))}
    </>
  );
}
export default Fruit;
