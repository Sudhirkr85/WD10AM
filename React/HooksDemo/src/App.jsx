import { useEffect, useState } from "react";
import "./App.css";
import Show from "./components/Show";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setItems(data.posts);
        
      });
  }, []);

  return (
    <>
      <Show items={items} />
    </>
  );
}

export default App;
