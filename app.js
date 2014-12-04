// Get started with Express
var express = require('express');
var app = express();
var db = require('./db.js');
var bodyParser = require('body-parser');

// Set EJS, view engine and body parser
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

// Listen for requests at port 3000
app.listen(3000);

// Query the DATABASE
// db.query("SELECT * FROM person;", function(err, res){
//   if (err) {
//     console.log("OOOPS!", err);
//   }
//   console.log(res.rows);
// });

app.get('/', function(req, res) {
	db.query("SELECT * FROM people;", function(err, dbRes) {
		if (!err) {
			res.render('people/index', { people: dbRes.rows });
		}
	})
});

app.get('/people/new', function(req, res) {
	res.render('people/new');
});

app.post('/people', function(req, res) {
	var params = [
		req.body.name,
		req.body.age,
		req.body.phone,
		req.body.email
	];

	db.query(
		"INSERT INTO people (name, age, phone, email) VALUES ($1, $2, $3, $4)", params, function(err, dbRes) {
			if (!err) {
				res.redirect('/');
			}
		}
	);
});

app.get('/people/:id', function(req, res) {
	db.query("SELECT * FROM people WHERE id = $1", [req.params.id], function(err, dbRes) {
		if (!err) {
			res.render('people/show', { person: dbRes.rows[0] });
		}
	});
});

app.get('/people/:id/edit', function(req, res) {
	db.query("SELECT * FROM people WHERE id = $1", [req.params.id], function(err, dbRes) {
		if (!err) {
			res.render('people/edit', { person: dbRes.rows[0] });
		}
	});
});

app.post('/people/:id', function(req, res) {
	var params = [
		req.body.name,
		req.body.phone,
		req.body.age,
		req.body.email,
		req.params.id
	];

	db.query("UPDATE people SET name = $1, phone = $2, age = $3, email = $4 WHERE id = $5", params, function(err, dbRes) {
		if (!err) {
			res.redirect('/people/' + req.params.id);
		}
	});
});
