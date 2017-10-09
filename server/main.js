'use strict'

//DB
var dbConfig = require('./db.js');
var mongoose = require('mongoose');
var Farmer = require('./models/Farmer.js');
var Product = require('./models/Product.js');

mongoose.connect(dbConfig.url);
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

//App
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();
var router = express.Router();

app.set('port', process.env.PORT || 3100);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
    res.setHeader('Cache-Control', 'no-cache');
    next();
});

router.get('/', function(req, res) {
    res.json({ message: 'API Initialized!' });
});

router.route('/farmers')
    .get(function(req, res) {
        Farmer.find(function(err, farmers) {
            if (err)
                res.send(err);
            res.json(farmers)
        });
});

router.route('/products')
    .get(function(req, res) {
        Product.find(function(err, products) {
            if (err)
                res.send(err);
            res.json(products)
        });
});

app.use('/api', router);

app.listen(app.get('port'), function() {

    console.log('Express server listening on port ' + app.get('port'));

});
