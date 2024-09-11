import React, { useState, useEffect } from 'react';
import './Cart.css';
import Item from './Item'; // Adjust the path if `Item.js` is in the same directory or a different path

function Cart() {
  const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem('cart')) || []);
  const [user, setUser] = useState(null); // Assuming user is stored in state

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const handleDeleteItem = (id) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const updateQuantity = (id, change) => {
    setCart(prevCart => 
      prevCart.map(item =>
        item.id === id ? { ...item, quantity: Math.max(0, item.quantity + change) } : item
      )
    );
  };

  const handleCheckout = async () => {
    if (user) {
      try {
        // Assuming you would handle the actual checkout process here
        alert("Your order is placed successfully!");
      } catch (error) {
        console.error('Checkout failed:', error);
        alert('Checkout failed.');
      }
    } else {
      alert('You need to log in to proceed with checkout.');
      // Redirect to login or show login modal
    }
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <main className="container">
      <h1>Your Cart</h1>
      <div id="cartItems">
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cart.map(item => (
            <Item
              key={item.id}
              item={item}
              onQuantityChange={updateQuantity}
              onDelete={handleDeleteItem}
            />
          ))
        )}
      </div>
      
      <div className="foot">
        <h3 style={{ marginRight: '20px' }}>Total</h3>
        <h2 id="total">${total.toFixed(2)}</h2>
        <div>
          <button onClick={handleClearCart}>Clear Cart</button>
          <button onClick={handleCheckout} className="checkout-btn">Proceed to Checkout</button>
        </div>
      </div>
    </main>
  );
}

export default Cart;
