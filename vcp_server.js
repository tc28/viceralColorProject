var express = require('express');
var app = express();

app.use(express.bodyParser());
app.use(express.methodOverride());

var anyDB = require('any-db');
var conn = anyDB.createConnection('sqlite3://vcp.db');

//I was wondering which methods that I should interact with the client
app.get('/', function(request, response) {
	//this is the function that is called
});



app.listen(8000);
