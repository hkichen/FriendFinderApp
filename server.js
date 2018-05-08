var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//==Express App==//
var app = express();
var PORT = 3000;

app.use(bodyParser.urlencoded({
     extended: true
}));

app.use(bodyParsery.json());