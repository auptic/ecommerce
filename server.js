var express = require("express");

// Used to log route methods to the terminal
var morgan = require('morgan');

var app = express();

// Middleware
app.use(morgan('dev'));


app.get('/', function(req, res) {
  var name = "Josh"
  res.json("My name is " + name);
});

app.get('/catname', function(req, res) {
  res.json('batman');
});

app.listen(3000, function(err){
  if (err) throw err;
  console.log('Server is running on port: 3000');
});
