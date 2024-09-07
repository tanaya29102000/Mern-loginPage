import React, { useState, useEffect } from 'react';
import './Cart.css'; 

function Cart() {
  const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem('cart')) || []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const handleDeleteItem = (index) => {
    setCart(prevCart => prevCart.filter((_, i) => i !== index));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
      <main className="container">
        <h1>Your Cart</h1>
        <div id="cartItems">
          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            cart.map((item, index) => (
              <div className="cart-item" key={item.id}>
                <div className="row-img">
                  <img className="rowimg" src={item.image} alt={item.name} />
                </div>
                <p style={{ fontSize: '12px' }}>{item.name}</p>
                <p>Quantity: {item.quantity}</p>
                <h2 style={{ fontSize: '15px' }}>${(item.price * item.quantity).toFixed(2)}</h2>
                <i className="fa-solid fa-trash" onClick={() => handleDeleteItem(index)}></i>
              </div>
            ))
          )}
        </div>
        
        <div className="foot">
          <h3 style={{ marginRight: '20px' }}>Total</h3>
          <h2 id="total">${total.toFixed(2)}</h2>
          <div>
          <button onClick={handleClearCart}>Clear Cart</button>
          </div>
        </div>
      </main>
  );
}

export default Cart;