// Import the http module
var http = require("http");

// Define the port (use process.env.PORT for deployment or 3001 locally)
const port = process.env.PORT || 3001;

// Create the server
http
  .createServer(function (req, res) {
    // Set the HTTP header with a status of 200 (OK) and the content type to HTML
    res.writeHead(200, { "Content-Type": "text/html" });
    
    // Send the response "Hello World!"
    res.end("Hello World!");
  })
  
  // Listen on the specified port
  .listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
