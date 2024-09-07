
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './componants/Navbar';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Signup from './pages/Signup';


function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
        </Routes>
      </main>
    </Router>
  );
}

export default App;