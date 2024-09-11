import React from 'react';
import './Item.css'; // Ensure this file exists and is properly styled

const Item = ({ item, onQuantityChange, onDelete }) => (
  <div className="cart-item">
    <div className="row-img">
      <img className="rowimg" src={item.image} alt={item.name} />
    </div>
    <p style={{ fontSize: '12px' }}>{item.name}</p>
    <p>
      Quantity:
      <button onClick={() => onQuantityChange(item.id, -1)} className="quantity-btn">-</button>
      <span>{item.quantity}</span>
      <button onClick={() => onQuantityChange(item.id, 1)} className="quantity-btn">+</button>
    </p>
    <h2 style={{ fontSize: '15px' }}>${(item.price * item.quantity).toFixed(2)}</h2>
    <i className="fa-solid fa-trash" onClick={() => onDelete(item.id)}></i>
  </div>
);

export default Item;
