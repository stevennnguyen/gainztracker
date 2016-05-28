var express = require('express');
var workoutRouter = express.Router();
var workoutCtrl = require('../controllers/workout.server.controller.js');

// ROUTES USED IN SERVER.JS
// =====================================================================================================================

var router = function () {

    // api/workouts
    workoutRouter.route('/')
        // GET all the workouts
        .get(function (req, res) {
            return workoutCtrl.list(req, res);
        })
        // POST a new workout
        .post(function (req, res) {
            return workoutCtrl.create(req, res);
        });

    // api/workouts/:id
    workoutRouter.route('/:workoutId')
        // GET a single workout
        .get(function (req, res) {
            return workoutCtrl.getWorkout(req, res);
        })
        // PUT a workout
        .put(function (req, res) {
            return workoutCtrl.updateWorkout(req, res);
        })
        // DELETE a workout
        .delete(function (req, res) {
            return workoutCtrl.remove(req, res);
        });

    return workoutRouter;
};

module.exports = router;