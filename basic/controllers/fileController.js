const File = require("../models/File");

exports.uploadFile = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    // Save metadata to MongoDB
    const newFile = new File({
      originalName: req.file.originalname,
      filename: req.file.filename,
      path: req.file.path,
      size: req.file.size
    });

    await newFile.save();

    res.status(201).json({
      message: "File uploaded successfully",
      file: newFile
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
