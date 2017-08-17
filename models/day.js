var Sequelize = require('sequelize');
var db = require('./_db');
var Restaurant = require('./place');


var Day = db.define('day', {
  number:{
    type : Sequelize.INTEGER
  }
}, {
  // defaultScope: {
  //   include: [Restaurant, Hotel, Activity]
  // }
});

module.exports = Day;
