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

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
