
const Cart = require('../models/Cart'); // Import Cart model

// Add item to cart
exports.addToCart = async (req, res) => {
  // Implementation here
};

// Get cart items
exports.getCart = async (req, res) => {
  // Implementation here
};

// Update item in cart
exports.updateCart = async (req, res) => {
  const { userId, itemId } = req.params;
  const { quantity } = req.body;

  try {
    const cart = await Cart.findOne({ userId });

    if (!cart) {
      return res.status(404).json({ message: 'No cart found for this user' });
    }

    // Find the item in the cart and update the quantity
    const itemIndex = cart.items.findIndex(item => item._id.toString() === itemId);
    if (itemIndex === -1) {
      return res.status(404).json({ message: 'Item not found in cart' });
    }

    // Update item quantity
    cart.items[itemIndex].quantity = quantity;
    await cart.save();

    res.status(200).json({ message: 'Cart updated successfully', cart });
  } catch (error) {
    console.error('Error updating cart:', error);
    res.status(500).json({ message: 'Error updating cart', error });
  }
};

// Remove item from cart
exports.removeFromCart = async (req, res) => {
  const { userId, itemId } = req.params;

  try {
    const cart = await Cart.findOne({ userId });

    if (!cart) {
      return res.status(404).json({ message: 'No cart found for this user' });
    }

    // Filter out the item with the matching itemId
    cart.items = cart.items.filter(item => item._id.toString() !== itemId);
    await cart.save();

    res.status(200).json({ message: 'Item removed from cart successfully', cart });
  } catch (error) {
    console.error('Error removing item from cart:', error);
    res.status(500).json({ message: 'Error removing item from cart', error });
  }
};
