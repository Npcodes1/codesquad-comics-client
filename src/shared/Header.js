import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const url = "http://localhost:8080";

const Header = ({ user, setUser }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    fetch(`${url}/logout`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result); //print success message
        setUser({}); //set user state to empty object
        localStorage.removeItem("user"); //remove user from local storage
        navigate("/"); //navigate to home page if success
      })
      .catch((error) => {
        console.log(error);
        navigate("/admin"); //navigate to admin page if failed
      });
  };

  return (
    <div>
      <header>
        <nav className="navbar">
          <div className="navbar-container">
            <div className="logo">
              <Link to="/">
                <img
                  className
                  src="./images/CodeSquad-Comics-logo.png"
                  alt="CodeSquad-Comics-logo"
                />
              </Link>
            </div>

            <div className="nav-links">
              <ul className>
                <li>
                  <Link to="/">HOME</Link>
                </li>
                <li>
                  <Link to="/about">ABOUT</Link>
                </li>
                <li>
                  {user.username ? (
                    <div>
                      <Link to="/admin">ADMIN</Link>

                      <a href="#" onClick={handleLogout}>
                        LOGOUT
                      </a>
                    </div>
                  ) : (
                    <Link to="/login">LOGIN</Link>
                  )}
                </li>
              </ul>
            </div>
            {/* <a className="hamburger" href="#" className="icon">
              <i className="fa fa-bars"></i>
            </a> */}
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
