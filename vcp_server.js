var express = require('express');
var app = express();

app.use(express.bodyParser());
app.use(express.methodOverride());

var anyDB = require('any-db');
var conn = anyDB.createConnection('sqlite3://vcp.db');

//rendering html 
var engines = require('consolidate');
app.engine('html', engines.hogan); //tell Express to run .html files through Hogan
app.set('views', __dirname + '/templates'); //tell Express where to find templates
app.use('/public', express.static('public'));

app.get('/website_page.html', function(request, response) {
	//this is the function that is called when the user calls website_page.html
	response.render('website_page.html', '');
});

app.get('/', function(request, response) {
	//this is the function that is called when the user calls imageselections.html
	response.render('imageselection.html', '');
});

//I was wondering which methods that I should interact with the client
app.get('/imageselection.html', function(request, response) {
	//this is the function that is called when the user calls imageselections.html
	response.render('imageselection.html', '');
});

app.get('/mobile.html', function(request, response) {
	response.render('mobile.html', '');
});




app.listen(8080);
console.log('server running on 8000');
