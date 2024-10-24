// Import the http and fs (file system) modules
var http = require("http");
var fs = require("fs");
var path = require("path");

// Define the port (use process.env.PORT for deployment or 3001 locally)
const port = process.env.PORT || 3001;

// Create the server
http.createServer(function (req, res) {
  // Set the path to the index.html file
  const filePath = path.join(__dirname, "Node_Project", "Assignments", "index.html");

  // Read the index.html file
  fs.readFile(filePath, function (err, data) {
    if (err) {
      // If the file is not found or another error occurs, return a 404
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("404 Not Found");
    } else {
      // Send the index.html file with the appropriate headers
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    }
  });
  
  // Listen on the specified port
}).listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
