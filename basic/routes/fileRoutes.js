const express = require("express");
const router = express.Router();
const upload = require("../middleswares/upload");
const { uploadFile } = require("../controllers/fileController");

// Upload file
router.post("/upload", upload.single("myFile"), uploadFile);

module.exports = router;
