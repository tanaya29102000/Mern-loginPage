
const Wishlist = require('../models/Wishlist');

// Add product to wishlist
exports.addToWishlist = async (req, res) => {
  const { userId, productId, name, price, image } = req.body;

  try {
    let wishlist = await Wishlist.findOne({ userId });

    if (!wishlist) {
      wishlist = new Wishlist({ userId, items: [] });
    }

    // Check if the item is already in the wishlist
    const itemExists = wishlist.items.some(item => item.productId === productId);

    if (itemExists) {
      return res.status(400).json({ message: 'Item already in wishlist' });
    }

    wishlist.items.push({ productId, name, price, image });
    await wishlist.save();

    res.status(200).json({ message: 'Item added to wishlist', wishlist });
  } catch (error) {
    console.error('Error adding to wishlist:', error);
    res.status(500).json({ message: 'Server error', error });
  }
};

// Get wishlist items for a user
exports.getWishlist = async (req, res) => {
  const { userId } = req.params;

  try {
    const wishlist = await Wishlist.findOne({ userId });

    if (!wishlist) {
      return res.status(404).json({ message: 'No wishlist found for this user' });
    }

    res.status(200).json(wishlist.items);
  } catch (error) {
    console.error('Error fetching wishlist:', error);
    res.status(500).json({ message: 'Server error', error });
  }
};

// Remove product from wishlist
exports.removeFromWishlist = async (req, res) => {
  const { userId, productId } = req.body;

  try {
    const wishlist = await Wishlist.findOne({ userId });

    if (!wishlist) {
      return res.status(404).json({ message: 'No wishlist found for this user' });
    }

    // Remove the item from the wishlist
    wishlist.items = wishlist.items.filter(item => item.productId !== productId);
    await wishlist.save();

    res.status(200).json({ message: 'Item removed from wishlist', wishlist });
  } catch (error) {
    console.error('Error removing from wishlist:', error);
    res.status(500).json({ message: 'Server error', error });
  }
};
