"use strict";
/* 
    This module is responsible for taking the app bundle.js and injecting it into the HTML
*/ 


var fs = require('fs');
var ugly = require('uglifyjs');
var index = fs.readFileSync('./public/index.html', 'utf8');
var mini = ugly.minify('./.tmp/bundle.js');
var start = index.indexOf('//  VERY START');
var end = index.indexOf('//  MUCH END');
var toReplace = index.substr(start, end);

var i1 = index.substr(0, start);
var i2 = index.substr(end+12, index.length);

// clear old script from index.html 
index = index.replace(toReplace, '');

// this is what we're gonna add (ie: the uglified script) 
var toAdd = '//  VERY START\n' + mini.code + '\n//  MUCH END' ;

var newIndex = i1 + toAdd + i2 ;

fs.writeFileSync('./public/index.html', newIndex, 'utf8');
console.log('Updated the index.html file!');

