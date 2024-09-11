
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaShoppingCart, FaHeart } from 'react-icons/fa'; // Correctly importing icons
import './Navbar.css';

function Navbar() {
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);
  const navigate = useNavigate(); // For programmatic navigation

  useEffect(() => {
    const updateCartCount = () => {
      const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
      const totalItems = savedCart.reduce((total, item) => total + item.quantity, 0);
      setCartCount(totalItems);
    };

    const updateWishlistCount = () => {
      const savedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
      setWishlistCount(savedWishlist.length); // Assuming each wishlist item is counted as one
    };

    updateCartCount();
    updateWishlistCount();

    // Listen for updates to localStorage (when items are added/removed)
    window.addEventListener('storage', updateCartCount);
    window.addEventListener('storage', updateWishlistCount);

    // Cleanup listeners when the component is unmounted
    return () => {
      window.removeEventListener('storage', updateCartCount);
      window.removeEventListener('storage', updateWishlistCount);
    };
  }, []);

  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          {/* Add your logo here if needed */}
          <Link to="/">Logo</Link>
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
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            {/* Wishlist Icon and Count */}
            <li className="wishlist-link">
              <button className="wishlist-icon" onClick={() => navigate('/wishlist')}>
                <FaHeart size={24} />
                {wishlistCount > 0 && <span className="wishlist-count">({wishlistCount})</span>}
              </button>
            </li>
            {/* Cart Icon and Count */}
            <li className="cart-link">
              <Link to="/cart">
                <FaShoppingCart size={24} />
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
