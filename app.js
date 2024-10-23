const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000; // You can change the port number if needed

// Define a route
app.get('/api/image', (req, res) => {
    const imagePath = path.join(__dirname, 'image.jpg'); // Change the filename if needed

    // Read the image file
    fs.readFile(imagePath, (err, data) => {
        if (err) {
            return res.status(500).send('Error reading image file');
        }

        // Convert the image data to Base64
        const base64Image = data.toString('base64');

        // Respond with the Base64 image
        res.json({ image: base64Image , "labels": [
            "Display",
            "Keyboard",
            "Keys"
        ]});
    });
});

// Start the server
app.listen(port, () => {
    console.log(`API is running at http://localhost:${port}/api/image`);
});
