// Load environment variables
//require('dotenv').config();
import logger from './middleswares/logger';
// Import dependencies
const express = require('express');
const userRoutes = require('./routes/userRoutes');
const uploadRoutes = require('./routes/uploadRoutes');

// Initialize express app
const app = express();

app.use('/uploads', express.static('uploads'));
// Middleware to parse JSON body
app.use(express.json());
app.use(logger); // Use the logger middleware
// Register routes
app.use('/api/users', userRoutes);
app.use('/api/upload', uploadRoutes);


// Default route (optional)
app.get('/', (req, res) => {
  res.send('Welcome to the Backend Application!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
