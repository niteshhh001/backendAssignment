
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();

const app = express();

//  Middleware (must be before routes)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//  Import routes
const userRoutes = require("./routes/userRoutes");
const calculatorRoutes = require("./routes/calculatorRoutes");
const fileRoutes = require("./routes/fileRoutes");
const logger = require("./middleswares/logger");
//  Use routes
app.use("/api/users", userRoutes);
app.use("/calculate", calculatorRoutes);
app.use("/api/files", fileRoutes);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

//  MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB Connected"))
.catch(err => console.error(err));

// logger middleware
app.use(logger);
//  Root route
app.get("/", (req, res) => {
  res.send("Hello World");
});

// Server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
