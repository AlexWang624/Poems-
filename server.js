var nedb = require


var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

// Route - callback - when that happens
// call the function that is declared

var database = [];

app.get('/home', function (req, res) {
  var fileToSend = "home.html";
  res.sendFile(fileToSend, {root:'./public'})

});

app.get('/poems', function (req, res){
  var fileToSend = "poems.html";
  res.sendFile(fileToSend, {root:'./public'})
});


app.get('/randompoem', function (req, res) {
  var fileToSend = "randompoem.html";
  res.sendFile(fileToSend, {root:'./public'})

});

app.get('/about', function (req, res) {
  var fileToSend = "about.html";
  res.sendFile(fileToSend, {root:'./public'})

});

app.listen(80, function () {
  console.log('Example app listening on port 80!')
});
