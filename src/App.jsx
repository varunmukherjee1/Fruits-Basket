import {Routes,Route} from "react-router-dom"
import Checkout from "./pages/Checkout/Checkout";
import HomePage from "./pages/HomePage/HomePage";
import Navbar from "./components/Navbar/Navbar";
import NotFound from "./pages/Not Found/NotFound";

function App() {

  // const changeNav = () => {
  //   console.log(window.scrollY);
  // }

  // window.addEventListener("scroll",changeNav);


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
