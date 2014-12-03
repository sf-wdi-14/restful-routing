// Get started with Express
var express = require('express');
var app = express();

// Set EJS and view engine
app.set('view engine', 'ejs');

// Listen for requests at port 3000
app.listen(3000);

app.get('/', function(req, res) {
	res.render('index.ejs');
});
