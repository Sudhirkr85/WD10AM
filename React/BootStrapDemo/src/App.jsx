import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MainComponent from "./components/MainComponent";
import Header from "./components/Header";
import { FaBagShopping } from "react-icons/fa6";
import { MdAddToHomeScreen } from "react-icons/md";
import { FaHome } from "react-icons/fa";

function App() {
  return (
    <div>
      <Header />
      <FaBagShopping />
      <MdAddToHomeScreen />
      <FaHome style={{color:'green'}}/>
      {/* <MainComponent  /> */}
    </div>
  );
}

export default App;
