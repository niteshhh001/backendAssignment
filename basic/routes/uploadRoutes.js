const express = require('express');
const multer = require('multer');
const path = require('path');
const { uploadFile } = require('../controllers/uploadController');

const router = express.Router();

// Storage config for multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // save to /uploads folder
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const ext = path.extname(file.originalname);
    cb(null, file.fieldname + '-' + uniqueSuffix + ext);
  }
});

const upload = multer({ storage: storage });

// Route: POST /api/upload
router.post('/', upload.single('file'), uploadFile);

module.exports = router;
