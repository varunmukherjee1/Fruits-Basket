import {Routes,Route} from "react-router-dom"
import Checkout from "./pages/Checkout/Checkout";
import HomePage from "./pages/HomePage/HomePage";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route
          path = "/"
          element = {
            <HomePage/>
          }
        />
        <Route
          path = "/checkout"
          element = {
            <Checkout/>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
