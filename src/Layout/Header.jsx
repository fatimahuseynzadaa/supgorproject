import logo from "../assets/images/logo.png";
import logo2 from "../assets/images/logo-light.png";
import location from "../assets/images/location.svg";
import { Link, NavLink } from "react-router-dom";
import { useState, useContext } from "react";
import { ModeContext } from "../context/ModeProvider";
import { useCart } from "react-use-cart";

const Header = () => {
  const [mode, setMode] = useContext(ModeContext);
  const { totalItems } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  const changeMode = () => {
    const updatedMode = mode === "light" ? "dark" : "light";
    setMode(updatedMode);
    localStorage.setItem("mode", updatedMode);
  };

  const toggleUserMenu = () => setIsOpen(!isOpen);

  return (
    <header className="header">
      {/* üst banner */}
      <div className="headline">
        <div className="container d-flex justify-content-between align-items-center">
          <i className="fa-solid fa-angle-left"></i>
          <p>
            FREE delivery & 40% Discount for next 3 orders! Place your 1st order
            in.
          </p>
          <i className="fa-solid fa-angle-right"></i>
        </div>
      </div>

      {/* top nav */}
      <div className="top-nav">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="links d-none d-md-flex">
            <a href="#">About Us</a>
            <a href="#">FAQ</a>
            <a href="#">My account</a>
            <a href="#">Order Tracking</a>
            <span className="order-now">
              <i className="fa-solid fa-bolt"></i> Order now and get it within
              15 min
            </span>
          </div>
          <div className="right-links">
            <a href="#">Contact</a>
            <a href="#">English</a>
            <a href="#">USD</a>
          </div>
        </div>
      </div>

      {/* middle nav */}
      <div className="middle-nav">
        <div className="container d-flex align-items-center justify-content-between">
          <div className="logo-area">
            <img src={mode === "dark" ? logo2 : logo} alt="Supgor logo" />
          </div>

          <div className="search-area d-none d-lg-flex">
            <div className="location">
              <div className="location-icon">
                <img src={location} alt="location" />
              </div>
              <div className="location-text">
                <span className="bold">All</span>
                <span className="small">your location</span>
              </div>
            </div>
            <div className="search-box">
              <i className="fa-solid fa-magnifying-glass"></i>
              <input type="text" placeholder="Search popular products..." />
            </div>
          </div>

          <div className="icons">
            {/* user icon + popup */}
            <div className="icon user" onClick={toggleUserMenu}>
              <i className="fa-regular fa-user"></i>
              {isOpen && (
                <div className="login-overlay" onClick={toggleUserMenu}>
                  <div
                    className="login-modal"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button className="close-btn" onClick={toggleUserMenu}>
                      <i className="fa-solid fa-xmark"></i>
                    </button>
                    <div className="modal-image">
                      <img
                        src="https://images.unsplash.com/photo-1517673400267-0251440c45dc?w=600"
                        alt="bowl"
                      />
                    </div>
                    <div className="modal-form">
                      <h2>Log in</h2>
                      <form>
                        <label>
                          Username or email address <span>*</span>
                        </label>
                        <input type="text" />
                        <label>
                          Password <span>*</span>
                        </label>
                        <input type="password" />
                        <div className="remember">
                          <input type="checkbox" id="remember" />
                          <label htmlFor="remember">Remember me</label>
                        </div>
                        <button type="submit" className="login-btn">
                          Log in
                        </button>
                        <a href="/forgot" className="lost-password">
                          Lost your password?
                        </a>
                      </form>
                      <p className="terms">
                        By continuing, you accept the Website Regulations,
                        Regulations for the sale of alcoholic beverages and the
                        Privacy Policy.
                      </p>
                      <div className="register-section">
                        <p>
                          You don't have an account yet?{" "}
                          <a href="/register">Register Now</a>
                        </p>
                      </div>
                      <div className="user-type">
                        <label>
                          <input type="radio" name="userType" defaultChecked />{" "}
                          I am a customer
                        </label>
                        <label>
                          <input type="radio" name="userType" /> I am a vendor
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="icon">
              <i className="fa-regular fa-heart"></i>
              <span className="badge">0</span>
            </div>

            <div className="icon">
              <a className="mode-button" onClick={changeMode}>
                {mode === "light" ? (
                  <i className="fa-regular fa-moon"></i>
                ) : (
                  <i className="fa-regular fa-sun"></i>
                )}
              </a>
            </div>

            <Link to="/basket" className="icon cart">
              <i className="fa-solid fa-basket-shopping"></i>
              <span className="badge">{totalItems}</span>
            </Link>

            <div className="cart-total">
              <strong>$0.00</strong>
              <span>Your Cart</span>
            </div>
          </div>
        </div>
      </div>

      {/* bottom nav */}
      <div className="bottom-nav d-none d-md-block">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="menu">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/products">Products</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/blog">Blog</NavLink>
          </div>
          <div className="best-seller">
            <i className="fa-solid fa-percent"></i>
            Best Seller
            <span className="sale">SALE</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
