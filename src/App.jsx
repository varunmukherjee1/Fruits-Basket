import {Routes,Route} from "react-router-dom"
import Checkout from "./pages/Checkout/Checkout";
import Products from "./pages/Products/Products";
import Navbar from "./components/Navbar/Navbar";
import NotFound from "./pages/Not Found/NotFound";
import HomePage from "./pages/HomePage/HomePage";

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
          path = "/products"
          element = {
            <Products/>
          }
        />
        <Route
          path = "/checkout"
          element = {
            <Checkout/>
          }
        />
        <Route
          path = "*"
          element = {
            <NotFound/>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
