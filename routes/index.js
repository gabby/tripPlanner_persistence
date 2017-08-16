var Promise = require('bluebird');
var router = require('express').Router();
var Hotel = require('../models').Hotel;
var Restaurant = require('../models').Restaurant;
var Activity = require('../models').Activity;
var path = require('path');

router.get('/', function(req, res, next) {
    //res.sendFile(path.join(__dirname, '../views/index.html'));
    res.render('index')
  });

module.exports = router;
