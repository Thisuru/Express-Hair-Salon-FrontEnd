import React, { useState, useEffect } from "react";
import { CustomButton } from "./CustomButton";
import { Link, useHistory } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const history = useHistory();
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  const bookingNavigateHandler = () => {
    history.push('/booking')
  }

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img src="images/Logo/Black.png" alt="" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              {/* <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                About
              </Link> */}
              <a href="/#about" className="nav-links">
                About
              </a>
            </li>
            <li className="nav-item">
              {/* <Link to="/services" className="nav-links" onClick={closeMobileMenu}>
                Services
              </Link> */}
              <a href="/#services" className="nav-links">
                Services
              </a>
            </li>

            <li className="nav-item">
              <Link to="/shop" className="nav-links" onClick={closeMobileMenu}>
                Shop
              </Link>
            </li>
            <li>
              <Link to="/booking" className="nav-links-mobile btn-booking" onClick={closeMobileMenu}>
                Booking
              </Link>
            </li>
          </ul>
          {CustomButton && <CustomButton buttonStyle="btn--primary" otherClasses="btn-booking" onClick={bookingNavigateHandler}>Booking</CustomButton>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
