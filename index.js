var express = require('express');
var app = express();

app.get('/', function (req, res) {
   res.send('Hello World');
});

app.delete('/user/:id', function (req, res) {
   // Here you would add your logic for deleting the user.
   // For example, you might use the id from req.params.id to find and delete the user in your database.
   res.send('User deleted');
});

var server = app.listen(8081, function () {
   var host = server.address().address;
   var port = server.address().port;
   
   console.log("Example app listening at http://%s:%s", host, port);
});

