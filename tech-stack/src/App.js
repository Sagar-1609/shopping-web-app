import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./Home";
import Navbar from "./Navbar";
import Product from "./Pages/Product";
import Login from "./Pages/Login";
import { Provider } from "react-redux";
import Store from "./redux/index";
import CartPage from "./Pages/CartPage";

function App() {
  return (
    <>
    
    
          <Provider store={Store}>
        <Routes>
          {/* <Navbar/> */}

          <Route path="/" exact element={<Home />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/login" element={<Login />} />
          <Route  path="/cartPage" element={<CartPage/>}/>
        </Routes>
      </Provider>
    </>
  );
}

export default App;
