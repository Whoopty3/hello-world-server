const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the Node_Project/Assignments folder
app.use(express.static(path.join(__dirname, 'Node_Project', 'Assignments')));

// Route to serve the index.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'Node_Project', 'Assignments', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
