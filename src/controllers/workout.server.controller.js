var Workout = require('../models/workout.server.model.js');

exports.list = function (req, res) {
    var query = Workout.find();
    query
    .sort({dateLogged: 'asc'})
    .exec(function(err, workouts) {
        res.json({workouts : workouts});
    });
};

// query db for all workout items in descinding order from when it was created
exports.list1 = function (req, res) {
    var query = Workout.find();
    query
    .sort({dateLogged: 'asc'})
    .exec(function(err, workouts) {
        res.render('workoutListView', {
            title : 'Express Example',
            workouts : workouts
        });
    });
};

exports.listDesc = function (req, res) {
    var query = Workout.find();
    query
    .sort({dateLogged: 'desc'})
    .exec(function(err, workouts) {
        res.render('workoutListView', {
            title : 'Express Example',
            workouts : workouts
        });
    });
};

// render information for a single workout
exports.getWorkout = function(req, res) {
    Workout.find({}, function (err, workouts) {
        var id = req.params.id;
        res.render('workoutView', {
            title: 'Workout',
            workout: workouts[id]
        });
    });
};

// create a new workout and save in mongodb
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
    res.redirect(301, '/Workouts');
};

exports.remove = function(req, res) {
    console.log('you hit this function');
};