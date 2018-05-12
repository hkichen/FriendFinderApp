var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//set up express
var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({
     extended: true
}));

//set express to handle parsing
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/app/public"));
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//Require routing to api and html
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//Start the server to begin listening
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
