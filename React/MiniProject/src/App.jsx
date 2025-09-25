import Layout from "./components/Layout";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
function App() {
  return (
    <div className="app">
      <Header />
      <Layout />
      <Footer />
    </div>
  );
}

export default App;
