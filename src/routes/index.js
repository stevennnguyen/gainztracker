var express = require('express');
var router = express.Router();
var workoutCtrl = require('../controllers/workout.server.controller.js');

/*GET HOME PAGE*/
router.get('/', function(req, res) {
    res.render('index', {title: 'Express'});
});

//get new workout page
router.get('/newworkout', function(req, res) {
    return workoutCtrl.getNote(req, res);
});

//post new workout page
router.post('/newworkout', function(req, res) {
    return workoutCtrl.create(req, res);
});

module.exports = router;