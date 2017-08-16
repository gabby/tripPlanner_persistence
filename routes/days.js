var Promise = require('bluebird');
var router = require('express').Router();
var Hotel = require('../models').Hotel;
var Restaurant = require('../models').Restaurant;
var Activity = require('../models').Activity; 
var Day = require('../models').Day;

router.get((req, res, next) =>{
    Day.findAll()
        .then(days =>{
            console.log(days)
            res.json(days)
        })
        .catch(next)
} )

router.get('/:id', (req, res, next) =>{
    Day.findOne({
        where: {
            id: req.params.id
        }
    })
        .then(day =>{
            res.json(day)
        })
        .catch(next)
} )

router.delete('/:id', (req, res, next) =>{
    Day.destroy({
        where: {
            id: req.params.id
        }
    })
    .catch(next)
       
} )

router.post('/', (req, res, next) =>{
    Day.create(req.body)
    .catch(next)
} )


module.exports = router;
