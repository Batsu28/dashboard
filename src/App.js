import "./App.css";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import SideMenu from "./components/SideMenu";
import Users from "./pages/Users";
import Home from "./pages/Home";
import Order from "./pages/Order";
import Moderater from "./pages/Moderator";
import Settings from "./pages/Settings";
import Products from "./pages/Products";
import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ProductsContext = createContext();

function App() {
  const [products, setProducts] = useState([]);
  const [dltProduct, setDltProduct] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:2000/products")
      .then((res) => setProducts(res.data));
  }, []);

  return (
    <div className="App">
      <ProductsContext.Provider
        value={{ products, setProducts, dltProduct, setDltProduct }}
      >
        <Header />
        <div className="container">
          <div className="main">
            <SideMenu />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/order" element={<Order />} />
              <Route path="/moderator" element={<Moderater />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/users" element={<Users />} />
            </Routes>
          </div>
        </div>
      </ProductsContext.Provider>
    </div>
  );
}

export default App;
