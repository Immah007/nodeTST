const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 3000;

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Route to handle sending text
app.get('/sendText', (req, res) => {
  const text = req.query.text;
  console.log('Received text:', text);
  res.send('Server Working');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
