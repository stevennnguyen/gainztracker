var express = require('express');
var app = express();
var port = process.env.PORT || 5000;

// Connect to MongoDB
var mongoose = require('mongoose');
// Gives the database 30 seconds to reconnect instead of dying
var options = {
    server: {socketOptions: {keepAlive: 300000, connectTimeoutMS: 30000}},
    replset: {socketOptions: {keepAlive: 300000, connectTimeoutMS : 30000}}
};
var mongodbUri = 'mongodb://testuser123:password@ds034279.mlab.com:34279/workoutnotes';
mongoose.connect(mongodbUri, options);
var conn = mongoose.connection;
conn.on('error', console.error.bind(console, 'connection error:'));
conn.once('open', function() {
    console.log('successfully connected to mongodb...');
});

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({extended: true})); // for parsing application/x-www-form-urlencoded

app.use(express.static('public'));
app.set('views', './src/views/pages');
app.set('view engine', 'ejs');

var workoutRouter = require('./src/routes/workoutRoutes')();

app.use('/Workouts', workoutRouter);

app.get('/', function (req, res) {
    res.render('index', {
        title: 'Gains Tracker'
    });
});

app.listen(port, function (err) {
    console.log('running server on port:' + port);
});