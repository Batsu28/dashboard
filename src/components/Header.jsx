import { useNavigate } from "react-router-dom";
import "../styles/header.css";
import LogOut from "../components/icons/Logout";

export default function Header(prop) {
  const { setLoggedIn } = prop;
  const navigate = useNavigate();
  function AdminLogOut() {
    setLoggedIn(false);
    navigate("/");
    localStorage.removeItem("currentUser");
  }

  return (
    <header>
      <div className="container">
        <div className="header">
          <div className="header_logo">
            <img
              src="./image/loginLogo.png"
              alt="logo"
              onClick={() => navigate("/")}
            />
          </div>
          <div className="search">
            <input type="text" placeholder="search" />
            <button>Search</button>
          </div>
          <div className="login" onClick={AdminLogOut}>
            <LogOut /> Log Out
          </div>
        </div>
      </div>
    </header>
  );
}
