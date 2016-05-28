// MODULES ========================================================================================================================
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// CONFIGURATION ========================================================================================================================

// set our port
var port = process.env.PORT || 5000;

// gives the database 30 seconds to reconnect instead of dying
var options = {
    server: {socketOptions: {keepAlive: 300000, connectTimeoutMS: 30000}},
    replset: {socketOptions: {keepAlive: 300000, connectTimeoutMS : 30000}}
};

// connect to mongoDB
var mongodbUri = 'mongodb://testuser123:password@ds034279.mlab.com:34279/workoutnotes';
mongoose.connect(mongodbUri, options);
var conn = mongoose.connection;
conn.on('error', console.error.bind(console, 'connection error:'));
conn.once('open', function() {
    console.log('successfully connected to mongodb...');
});

// parse application for values
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({extended: true})); // for parsing application/x-www-form-urlencoded

// set our static directory and view engine
app.use(express.static('public'));
app.set('views', './public/views/pages');
app.set('view engine', 'ejs');

// ROUTES ========================================================================================================================

// inject and use the routes in our main application
var workoutRouter = require('./app/routes/workoutRoutes')();
app.use('/api/workouts', workoutRouter);

// render main view
app.get('/', function (req, res) {
    res.render('index', {
        title: 'Gains Tracker'
    });
});

// START APP ========================================================================================================================

// startup app on http://localhost:3000, if not available http://localhost:5000
app.listen(port, function (err) {
    console.log('running server on port:' + port);
});