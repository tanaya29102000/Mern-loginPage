import axios from 'axios';

const API = axios.create({
});

// In api.js
export const checkLogin = () => API.get('/auth/check-login');

// Auth
export const signup = (formData) => API.post('/auth/signup', formData);
export const login = (formData) => API.post('/auth/login', formData);

// Cart
export const addToCart = (productId) => API.post('/cart/add', { productId });
export const removeFromCart = (productId) => API.post('/cart/remove', { productId });
export const getCart = () => API.get('/cart');

// Wishlist
export const addToWishlist = (productId) => API.post('/wishlist/add', { productId });
export const removeFromWishlist = (productId) => API.post('/wishlist/remove', { productId });
export const getWishlist = () => API.get('/wishlist');



