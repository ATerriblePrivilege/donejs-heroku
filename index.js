var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use('/package.json', express.static(__dirname + '/package.json'));
app.use('/dist', express.static(__dirname + '/dist'));
app.use('/src', express.static(__dirname + '/src'));

// views is directory for all template files

var engines = require('consolidate');

app.set('views', __dirname);
app.engine('html', engines.mustache);
app.set('view engine', 'html');

app.get('/', function(request, response) {
  response.render('production.html');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


