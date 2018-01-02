var express = require('express');
var app = express();
var request = require('request');

app.get('/', function(req, res) {
    res.send("You made it to the home page.");
});

app.get('/results', function(req, res) {
    request("http://www.omdbapi.com/?apikey=66d897ed&s=Harry", function(error, response, body) {
        if (!error) {
            var results = JSON.parse(body);
            res.send(results);
        }
    });
});

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
});