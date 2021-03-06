var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var db = require('./models');
var controllers = require('./controllers');	

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res){
	res.sendFile('views/index.html', {root: __dirname});
	console.log('Eat Ice Cream');

});

app.get('/api', controllers.api.index);


app.listen(3000);