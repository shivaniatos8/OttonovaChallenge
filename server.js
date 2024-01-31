const express = require('express');
const path = require('path');
const citiesData = require('./cities.json');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the 'view' directory
app.use(express.static(path.join(__dirname, 'views')));

// API endpoint to return cities data
app.get('/cities', (req, res) => {
  res.json(citiesData);
});

// Catch-all route to serve index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/city/:cityName', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
