var fs = require('fs');
var express = require('express');
var app = express();


app.use(express.static(__dirname+'/public'));

app.listen(6969, function () {
console.log('Very app, much 6969');
}) 

