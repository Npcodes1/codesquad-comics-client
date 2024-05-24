import React from "react";

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
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Login</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-h3">FOLLOW US</h3>
            <ul className="footer-links">
              <div className="social">
                <li>
                  <a href="#">
                    <i className="fa-brands fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </li>
              </div>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-h3">A PRODUCT OF</h3>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img
                className="footer-img-size"
                src="./images/CodeSquad-logo.png"
                alt="CodeSquad-Footer-logo"
              />
            </a>
          </div>
        </section>
      </footer>
    </div>
  );
};

export default Footer;
