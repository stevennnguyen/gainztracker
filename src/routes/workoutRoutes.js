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
        });
    workoutRouter.route('/:id')
        .get(function (req, res) {
            return workoutCtrl.getWorkout(req, res);
        });
    return workoutRouter;
};

module.exports = router;