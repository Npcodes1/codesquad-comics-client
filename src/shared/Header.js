import React from "react";

const Header = () => {
  return (
    <div>
      <header className="header">
        <nav className="navbar">
          <div className="navbar-container">
            <div className="logo">
              <a href="./index.html">
                <img
                  className
                  src="./images/CodeSquad-Comics-logo.png"
                  alt="CodeSquad-Comics-logo"
                />
              </a>
            </div>

            <div className="nav-links">
              <ul className>
                <li>
                  <a href="./index.html">HOME</a>
                </li>
                <li>
                  <a href="./about.html">ABOUT</a>
                </li>
                <li>
                  <a href="./login.html">LOGIN</a>
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
