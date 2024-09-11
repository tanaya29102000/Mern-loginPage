// // const express = require('express');
// const router = express.Router();
// const { addToWishlist, getWishlist, removeFromWishlist } = require('../controllers/wishlistController');

// // Add a product to the wishlist
// router.post('/wishlist', addToWishlist);

// // Get all wishlist items for a user
// router.get('/wishlist/:userId', getWishlist);

// // Remove a product from the wishlist
// router.delete('/wishlist', removeFromWishlist);

// module.exports = router;
const express = require('express');
const router = express.Router();
const { addToWishlist, getWishlist, removeFromWishlist } = require('../controllers/wishlistController');

// Add a product to the wishlist
router.post('/wishlist', addToWishlist);

// Get all wishlist items for a user
router.get('/wishlist/:userId', getWishlist);

// Remove a product from the wishlist
router.delete('/wishlist', removeFromWishlist);

module.exports = router;
