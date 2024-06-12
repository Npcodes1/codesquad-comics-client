import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <section className="footer-container">
          <div className="footer-column">
            <h3 className="footer-h3">VISIT US</h3>
            <ul className="footer-links">
              <li>CodeSquad Comics</li>
              <li>123 Dorchester Avenue</li>
              <li>Boston, MA 02124</li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-h3">LINKS</h3>
            <ul className="footer-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-h3">FOLLOW US</h3>
            <ul className="footer-links">
              <div className="social">
                <li>
                  <Link to="#">
                    <i className="fa-brands fa-facebook"></i>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="fa-brands fa-instagram"></i>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="fa-brands fa-twitter"></i>
                  </Link>
                </li>
              </div>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-h3">A PRODUCT OF</h3>
            <Link to="#" target="_blank" rel="noopener noreferrer">
              <img
                className="footer-img-size"
                src="./images/CodeSquad-logo.png"
                alt="CodeSquad-Footer-logo"
              />
            </Link>
          </div>
        </section>
      </footer>
    </div>
  );
};

export default Footer;
