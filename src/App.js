import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
// import "bootstrap/dist/js/bootstrap.js";
import "./App.css";
import Banner from "./comps/banner/Banner";
import Main from "./comps/main/Main";

function App() {
  return (
    <div>
      <Banner />
      <Main />
    </div>
  );
}

export default App;
