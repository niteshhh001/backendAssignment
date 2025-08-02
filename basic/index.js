// Load environment variables
//require('dotenv').config();

// Import dependencies
const express = require('express');
const userRoutes = require('./routes/userRoutes');

// Initialize express app
const app = express();

// Middleware to parse JSON body
app.use(express.json());

// Register routes
app.use('/api/users', userRoutes);

// Default route (optional)
app.get('/', (req, res) => {
  res.send('Welcome to the Backend Application!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
