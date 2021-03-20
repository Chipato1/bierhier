'use strict';
/**
 * Author:    Carl
 * Created:   20.03.2021
 * Description: Main Server-file for the BierHier NodeJs Platform. Using express and ejs.
 **/


// Modules
var express = require('express');
var path = require('path');
var routes = require('./routes/index.js');

// App setup
var port = process.env.PORT || 3000;
var app = express();

app.set('view engine', 'ejs');

// Use public folder for static content
app.use('/public', express.static(process.cwd() + '/public'));


routes(app);

app.get('/',function (req, res) {
    res.render('pages/home')
});

// start server
app.listen(port, function() {
    console.log('Server listening on port ' + port + '...');
});