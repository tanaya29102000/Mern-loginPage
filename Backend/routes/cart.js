
const express = require('express');
const router = express.Router();
const { addToCart, getCart, updateCart, removeFromCart } = require('../controllers/cartController');

// Add item to cart
router.post('/cart', addToCart);

// Get all items in the cart for a specific user
router.get('/cart/:userId', getCart);

// Update the quantity of an item in the cart
router.put('/cart/:userId/item/:itemId', updateCart);

// Remove an item from the cart
router.delete('/cart/:userId/item/:itemId', removeFromCart);

module.exports = router;
