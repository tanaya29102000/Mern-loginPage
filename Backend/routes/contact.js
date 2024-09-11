const express = require('express');
const { check } = require('express-validator');
const { contactController } = require('../controllers/contactController'); // Import the controller

const router = express.Router();

// Define the contact form route with validation
router.post(
  '/contact',
  [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').notEmpty(),
    check('message', 'Message is required').notEmpty()
  ],
  contactController // Use the controller function
);

module.exports = router;
