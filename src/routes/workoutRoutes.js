var express = require('express');

var workoutRouter = express.Router();
var workoutCtrl = require('../controllers/workout.server.controller.js');

var router = function () {//nav) {
    workoutRouter.route('/')
        .get(function (req, res) {
            return workoutCtrl.list(req, res);
        })
        .post(function (req, res) {
            return workoutCtrl.create(req, res);
        })
        .delete(function (req, res) {
            return workoutCtrl.remove(req, res);
        });
    workoutRouter.route('/:id')
        .get(function (req, res) {
            return workoutCtrl.getWorkout(req, res);
        });
    workoutRouter.route('/api')
        .get(function (req, res) {
            res.json({'message': 'ayy'});
        });
    return workoutRouter;
};

module.exports = router;