var express = require('express');
var router = express.Router();
var dotenv = require('dotenv').config();

var {getPics, getMarsRover, getPreviousPhoto} = require("../Helpers/NasaHelpers.js")


router.get('/home', function(req, res, next) {
 getPics().then(result => {res.send(result)});
});

router.get('/marsrover', function(req, res, next) {
  getMarsRover().then(result => {res.send(result)});
 });


 router.get('/previousPhoto/:searchDate', function(req, res, next) {
  
   getPreviousPhoto(req.params.searchDate).then(result => {res.send(result)});
 });



module.exports = router;
