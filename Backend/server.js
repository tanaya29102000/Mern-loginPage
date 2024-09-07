const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Middleware
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));
app.use(bodyParser.json());

// Routes
const createUserRoutes = require('./routes/createUser');
const loginUserRoutes = require('./routes/loginUser');

app.use('/api', createUserRoutes);
app.use('/api', loginUserRoutes);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
