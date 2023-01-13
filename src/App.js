import "./App.css";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import SideMenu from "./components/SideMenu";
import Home from "./pages/Home";
import Users from "./pages/Users";

function App() {
  return (
    <div className="App">
      <Header />

      <div className="container">
        <div className="main">
          <SideMenu />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<Users />} />
            <Route path="" element="" />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
