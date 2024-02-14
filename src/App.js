import "materialize-css/dist/css/materialize.min.css";
import "./assets/index.css";
import SelectorSimulation from "./components/SelectorSimulation";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      {" "}
      <div className="page-container">
        <Header />
        <div className="content-wrap">
          <SelectorSimulation />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
