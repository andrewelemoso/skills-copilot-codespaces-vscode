// Create web server
// Set up a route for comments
// Use the comments data to render a list of comments

var express = require('express');
var app = express();
var comments = require('./comments');

// Set up a route for comments
app.get('/comments', function(req, res) {
  var allComments = comments.all();
  var html = '<h1>Comments</h1>';
  html += '<ul>';
  allComments.forEach(function(comment) {
    html += '<li>' + comment + '</li>';
  });
  html += '</ul>';
  res.send(html);
});

app.listen(3000, function() {
  console.log('Listening on http://localhost:3000');
});