// // // const express = require('express');
// // // const mongoose = require('mongoose');
// // // const cors = require('cors');
// // // const bodyParser = require('body-parser');
// // // require('dotenv').config();

// // // const app = express();
// // // const port = process.env.PORT || 8080;

// // // // Connect to MongoDB
// // // mongoose.connect(process.env.MONGO_URI, {
// // //   useNewUrlParser: true,
// // //   useUnifiedTopology: true
// // // })
// // //   .then(() => console.log('MongoDB connected'))
// // //   .catch(err => console.error('MongoDB connection error:', err));

// // // // Middleware
// // // app.use(cors({
// // //   origin: 'http://localhost:3000',
// // //   credentials: true
// // // }));
// // // app.use(bodyParser.json());

// // // // Routes
// // // const createUserRoutes = require('./routes/createUser');
// // // const loginUserRoutes = require('./routes/loginUser');
// // // const contactRoutes = require('./routes/contact');

// // // app.use('/api', createUserRoutes);
// // // app.use('/api', loginUserRoutes);
// // // app.use('/api', contactRoutes);

// // // app.listen(port, () => {
// // //   console.log(`Server listening on port ${port}`);
// // // });
// // const express = require('express');
// // const mongoose = require('mongoose');
// // const cors = require('cors');
// // const bodyParser = require('body-parser');
// // require('dotenv').config();

// // const app = express();
// // const port = process.env.PORT || 8080;

// // // Connect to MongoDB
// // mongoose.connect(process.env.MONGO_URI, {
// //   useNewUrlParser: true,
// //   useUnifiedTopology: true
// // })
// //   .then(() => console.log('MongoDB connected'))
// //   .catch(err => console.error('MongoDB connection error:', err));

// // // Middleware
// // app.use(cors({
// //   origin: 'http://localhost:3000',
// //   credentials: true
// // }));
// // app.use(bodyParser.json());

// // // Routes
// // const createUserRoutes = require('./routes/createUser');
// // const loginUserRoutes = require('./routes/loginUser');
// // const contactRoutes = require('./routes/contact');
// // const wishlistRoutes = require('./routes/wishlist');  // Add the wishlist routes

// // app.use('/api', createUserRoutes);
// // app.use('/api', loginUserRoutes);
// // app.use('/api', contactRoutes);
// // app.use('/api', wishlistRoutes);  // Register the wishlist routes

// // app.listen(port, () => {
// //   console.log(`Server listening on port ${port}`);
// // });
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// require('dotenv').config();

// const app = express();
// const port = process.env.PORT || 8080;

// // Connect to MongoDB
// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
//   .then(() => console.log('MongoDB connected'))
//   .catch(err => console.error('MongoDB connection error:', err));

// // Middleware
// app.use(cors({
//   origin: 'http://localhost:3000',
//   credentials: true
// }));
// app.use(bodyParser.json());

// // Routes
// const createUserRoutes = require('./routes/createUser');
// const loginUserRoutes = require('./routes/loginUser');
// const contactRoutes = require('./routes/contact');
// const wishlistRoutes = require('./routes/wishlist');  // Add the wishlist routes

// app.use('/api', createUserRoutes);
// app.use('/api', loginUserRoutes);
// app.use('/api', contactRoutes);
// app.use('/api', wishlistRoutes);  // Register the wishlist routes

// app.listen(port, () => {
//   console.log(`Server listening on port ${port}`);
// });
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
const contactRoutes = require('./routes/contact');
const wishlistRoutes = require('./routes/wishlist');
const cartRoutes = require('./routes/cart');  // Add the cart routes

app.use('/api', createUserRoutes);
app.use('/api', loginUserRoutes);
app.use('/api', contactRoutes);
app.use('/api', wishlistRoutes);
app.use('/api', cartRoutes);  // Register the cart routes

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
