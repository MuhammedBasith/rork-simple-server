const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Set up multer to store files
const upload = multer({ dest: 'uploads/' });

// Ensure uploads directory exists
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// POST endpoint to receive archive.txt
app.post('/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }

  const targetPath = path.join(uploadDir, 'archive.txt');
  fs.renameSync(req.file.path, targetPath);

  res.status(200).send('archive.txt uploaded successfully');
});


app.get('/download', (req, res) => {
    const filePath = path.join(uploadDir, 'archive.txt');
    if (fs.existsSync(filePath)) {
      res.download(filePath, 'archive.txt');
    } else {
      res.status(404).send('archive.txt not found');
    }
  });

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});