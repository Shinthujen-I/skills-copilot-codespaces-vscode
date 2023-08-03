// Create web server
// The web server should respond to requests to /comments and
// send back a JSON response containing hard-coded data
// that will serve as the comments list for our application

// Import express
var express = require('express');
// Create express application
var app = express();

// Serve static files from the build directory
app.use(express.static('build'));

// Start server
app.listen(3001, function () {
  console.log('Server listening on port 3001!');
});

// Hard-coded data
var comments = [
  { id: 1, author: 'Morgan McCircuit', text: 'Great picture!'},
  { id: 2, author: 'Bending Bender', text: 'Excellent stuff'},
  { id: 3, author: 'John Doe', text: 'Awesome picture!'}
];

// Route to comments
app.get('/comments', function (req, res) {
  // Send hard-coded data
  res.send(comments);
});