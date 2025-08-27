import dotenv from 'dotenv';
import axios from 'axios';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

dotenv.config();

// Fix __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
 
// Middleware to parse JSON bodies
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files (HTML, JS)

// API endpoint to handle GIS data submission
app.post('/api/submit', async (req, res) => {
  try {
    const { hospitalName, latitude, longitude} = req.body;
    if (!hospitalName || !latitude || !longitude) {
      return res.status(400).json({ status: 'error', message: 'Missing required fields' });
    }

    // Forward data to Google Apps Script
    const response = await axios.post(process.env.APPS_SCRIPT_URL, {
      hospitalName,
      latitude,
      longitude
    }, {
      headers: { 'Content-Type': 'application/json' }
    });

    // Check if response.data is valid JSON
    if (!response.data || typeof response.data !== 'object') {
      return res.status(500).json({ status: 'error', message: 'Invalid response from Apps Script' });
    }

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});