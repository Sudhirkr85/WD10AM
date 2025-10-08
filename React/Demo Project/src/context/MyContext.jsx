import { createContext, useContext, useState } from "react";

const FruitContext = createContext({
  fruits: [],
  saveFruit: () => {},
  deleteFruit: () => {},
});

function FruitProvider({ children }) {
  const [fruits, setFruits] = useState(["Mango", "Banana"]);

  const saveFruit = (item) => {
    setFruits((items) => [...items, item]);
  };

  const deleteFruit = (fruit) => {
    setFruits((items) => items.filter((item) => item !== fruit));
  };

  return (
    <FruitContext.Provider value={{ fruits, saveFruit, deleteFruit }}>
      {children}
    </FruitContext.Provider>
  );
}

export function useFruits() {
  return useContext(FruitContext);
}

export default FruitProvider;
