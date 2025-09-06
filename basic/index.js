 /* // Load environment variables
//require('dotenv').config();
import logger from './middleswares/logger';
// Import dependencies
const express = require('express');
const userRoutes = require('./routes/userRoutes');
const uploadRoutes = require('./routes/uploadRoutes');
const todoRoutes = require('./routes/todoRoutes');
// Initialize express app
const app = express();

app.use('/uploads', express.static('uploads'));
// Middleware to parse JSON body
app.use(express.json());
app.use(logger); // Use the logger middleware
// Register routes
app.use('/api/users', userRoutes);
app.use('/api/upload', uploadRoutes);
// todo routes

app.use('/api/todos', todoRoutes);

// Default route (optional)
app.get('/', (req, res) => {
  res.send('Welcome to the Backend Application!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
}); */
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

//  Middleware (must be before routes)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//  Import routes
const userRoutes = require("./routes/userRoutes");
const calculatorRoutes = require("./routes/calculatorRoutes");

//  Use routes
app.use("/api/users", userRoutes);
app.use("/calculate", calculatorRoutes);

//  MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB Connected"))
.catch(err => console.error(err));

//  Root route
app.get("/", (req, res) => {
  res.send("Hello World");
});

// Server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
