var express = require('express');
var app = express();
var request = require('request');

app.set("view engine", "ejs");

app.get('/', function(req, res) {
    res.render("search");
});

app.get('/results', function(req, res) {
    var search = req.query.search;
    var url = "http://www.omdbapi.com/?apikey=66d897ed&s=" + search;
    request(url, function(error, response, body) {
        if (!error) {
            var data = JSON.parse(body);
            res.render("results", {data: data});
        }
    });
});

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
});