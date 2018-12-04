var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');

var config = require('./config');
var setUpController = require('./api/controllers/setUpController');
var todoController = require('./api/controllers/todoController');

var app = express();
var port = process.env.PORT || 2019;

app.use("/assets", express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));


app.use(morgan("dev"));

app.set("view engine", "ejs");

mongoose.connect(config.getDbConnectionString(),{ useNewUrlParser: true });
setUpController(app);
todoController(app);



app.get("/", function (req, res) {
    res.render("index");
});

app.listen(port, function () {
    console.log("App listening on port : " + port);
});