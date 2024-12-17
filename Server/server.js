const express = require("express");
const cors = require('cors');
const fs = require("fs");
const path = require('path');

const app = express();
const PORT = 5000;

// used to allow cross-origin requests
app.use(cors({
    origin: 'http://localhost:3000', 
}));


// API endpoint
app.get("/api/v1/servicehealth", (req, res) => {
    const filePath = path.join(__dirname, "serviceHealthData.json");
  
    // Read JSON file dynamically
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        console.error("Error reading JSON file:", err);
        res.status(500).json({ error: "Failed to load data" });
      } else {
        res.json(JSON.parse(data));
      }
    });
  });

// Start listening to the port
app.listen(PORT, () => {
  console.log(`Mock server running at http://localhost:${PORT}`);
});
