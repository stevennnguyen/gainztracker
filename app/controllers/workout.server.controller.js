var Workout = require('../models/workout.server.model.js');

// CONTROLLERS USED IN WORKOUTROUTES.JS
// =====================================================================================================================

// Routes that end in /workouts
// ---------------------------------------------------------------------------------------------------------------------

// GET all workouts
exports.list = function (req, res) {
    var query = Workout.find();
    query
    .sort({dateLogged: 'asc'})
    .exec(function(err, workouts) {
        res.json({workouts : workouts});
    });
};
// POST new workout, save in MongoDB
exports.create = function(req, res) {
    var entry = new Workout({
        date: req.body.date,
        workout: req.body.workout,
        thoughts: req.body.thoughts
    });
    entry.save(function (err) {
        if (err) {
            console.log('errror: ' + err);
        }
    });
    // rerender workout page after saving data
    res.redirect(301, '/api/workouts');
};
// Sort by different parameter.
/*exports.listDesc = function (req, res) {
    var query = Workout.find();
    query
    .sort({dateLogged: 'desc'})
    .exec(function(err, workouts) {
        res.render('workoutListView', {
            title : 'Express Example',
            workouts : workouts
        });
    });
};*/

// Routes that end in /workouts/:workout_id
// ---------------------------------------------------------------------------------------------------------------------

// GET single workout
exports.getWorkout = function(req, res) {
    Workout.findById(req.params.workoutId, function (err, workout) {
        if (err) {
            res.send(err);
        }
        res.json(workout);
    });
};
// PUT (update) a single workout
exports.updateWorkout = function(req, res) {
    Workout.findById(req.params.workoutId, function (err, workout) {
        if (err) {
            res.send(err);
        }

        workout.date = req.body.date;
        workout.workout = req.body.workout;
        workout.thoughts = req.body.thoughts;

        workout.save(function(err) {
            if (err) {
                res.send(err);
            }
            res.json({message: 'Workout updated!'});
        });
    });
};
// DELETE single workout
exports.remove = function(req, res) {
    Workout.remove({
        _id: req.params.workoutId
    }, function (err, workout) {
        if (err) {
            res.send(err);
        }
        res.json({message: 'Successfully deleted'});
    });
};
