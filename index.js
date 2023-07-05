var express = require('express');
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
var app = express();

app.get('/', function (req, res) {
   res.send('Hello World');
});

app.post('/addUser', function (req, res) {
   res.send(req.body);
});

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
});

