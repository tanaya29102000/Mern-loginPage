
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './componants/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Wishlist from './pages/Wishlist';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false); // Added loading state

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
  };

  const addToWishlist = (product) => {
    if (!wishlist.find((item) => item.id === product.id)) {
      setWishlist((prevWishlist) => [...prevWishlist, product]);
      toast.success(`${product.name} added to wishlist!`);
    }
  };

  const removeFromWishlist = (product) => {
    setWishlist((prevWishlist) => prevWishlist.filter((item) => item.id !== product.id));
    toast.info(`${product.name} removed from wishlist!`);
  };

  const updateQuantity = (id, change) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + change } : item
      ).filter((item) => item.quantity > 0)
    );
  };

  const handleLogin = (email, password) => {
    setLoading(true);
    axios.post('http://localhost:8080/loginUser', { email, password })
      .then((response) => {
        setLoading(false);
        if (response.data.success) {
          setUser(response.data.user);
          toast.success('Login successful');
        } else {
          setError(response.data.message);
          toast.error(response.data.message);
        }
      })
      .catch((error) => {
        setLoading(false);
        setError('Login failed');
        toast.error('Login failed. Please try again.');
      });
  };

  return (
    <Router>
      <Navbar user={user} cartQuantity={cart.length} wishlist={wishlist} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/shop" element={<Shop addToCart={addToCart} addToWishlist={addToWishlist} user={user} wishlist={wishlist} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart cart={cart} updateQuantity={updateQuantity} />} />
        <Route path="/login" element={<Login handleLogin={handleLogin} loading={loading} />} /> {/* Pass loading state */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/wishlist" element={<Wishlist wishlist={wishlist} addToCart={addToCart} removeFromWishlist={removeFromWishlist} user={user} />} />
      </Routes>
      {error && <div className="error-message">{error}</div>}
      <ToastContainer />
    </Router>
  );
};

export default App;
