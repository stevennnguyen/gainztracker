var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var workoutSchema = new Schema({
    date: String,
    workout: String,
    thoughts: String,
    dateLogged: {type: Date, default: Date.now},
});

module.exports = mongoose.model('Workout', workoutSchema);