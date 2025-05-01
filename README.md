# Rork Simple Server

This is a simple Express server to upload `archive.txt` files, created to bypass the Rork AI platform's restriction on downloading code directly.

Rork (https://rork.app) doesn't let you download code, so this server lets you send an `archive.txt` file (containing your project files) to store it.

❌ Please deploy the server on you own by cloning the repo.

## Features
- Upload `archive.txt` files using a POST request.
- Stores files in an `uploads/` folder.
- Built with Express.js and Multer for easy file handling.

## Creating archive.txt in Rork's Terminal
To bundle your project files into `archive.txt` within Rork's terminal:
1. Navigate to your project folder in Rork's terminal.
2. Run this command to create `archive.txt`:
   ```bash
   tar -czf - . | base64 > archive.txt
   ```
   This:
   - Creates a compressed archive of all files and folders.
   - Encodes it to plain text using base64.
   - Saves it as `archive.txt`.

To recreate your project from `archive.txt` later:
1. Move `archive.txt` to an empty folder.
2. Run:
   ```bash
   base64 -d -i archive.txt | tar -xzf -
   ```
   This decodes and extracts the original files and folder structure.

## Prerequisites
- Node.js (version 14 or higher)
- npm (comes with Node.js)
- Git (to clone the repo)

## Installation
1. Clone the repo:
   ```bash
   git clone https://github.com/MuhammedBasith/rork-simple-server.git
   cd rork-simple-server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create an `uploads/` folder if it doesn't exist:
   ```bash
   mkdir uploads
   ```

## Usage
1. Start the server locally:
   ```bash
   node server.js
   ```
   The server will run on `http://localhost:3000`.

2. Upload `archive.txt` from your computer:
   ```bash
   curl -X POST -F "file=@archive.txt" http://localhost:3000/upload
   ```
   Replace `archive.txt` with the path to your file.

3. To upload to the live server on Render:
   ```bash
   curl -X POST -F "file=@archive.txt" https://<your server url>/upload
   ```

## Deployment
This server is deployed on Render at https://rork-simple-server.onrender.com.

Note: Files uploaded to Render may not persist long-term without a paid plan or persistent disk. Contact Render support for details.

## Contributing
Feel free to open issues or submit pull requests if you want to improve the server.

## License
MIT License. See [LICENSE](LICENSE) for details.
