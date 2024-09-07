import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useState, useEffect } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';

function Navbar() {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const updateCartCount = () => {
      const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
      const totalItems = savedCart.reduce((total, item) => total + item.quantity, 0);
      setCartCount(totalItems);
    };

    updateCartCount();

    window.addEventListener('storage', updateCartCount);

    return () => {
      window.removeEventListener('storage', updateCartCount);
    };
  }, []);

  return (
    <header>
      <nav className="navbar">
        <div className="logo">
        </div>
        <div className="nav-links">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li className="cart-link">
              <Link to="/cart">
                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
              </Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
