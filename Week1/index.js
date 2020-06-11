const express = require("express");
const dishRouter = require("./dishRouter");
const promoRouter = require("./promoRouter");
const leaderRouter = require("./leaderRouter");
const app = express();
var logger = require('morgan');
var bodyParser = require('body-parser');

const hostname = 'localhost';
const port = process.env.PORT || 3000;

app.use(bodyParser.json());                              //tells the system that you want json to be used.
app.use(bodyParser.urlencoded({ extended: false }));     //tells the system whether you want to use a simple algorithm 
                                                         //for shallow parsing (i.e. false) or complex algorithm for 
                                                         //deep parsing that can deal with nested objects (i.e. true).

app.use('/dishes', dishRouter);
app.use('/promotions', dishRouter);
app.use('/leaders', leaderRouter);

app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.listen(port, hostname, function(){
    console.log('Server running at http://'+hostname+':'+port);
});


// var express = require('express');
// var path = require('path');
// var logger = require('morgan');
// var bodyParser = require('body-parser');

// var hostname = 'localhost';
// var port = 3000;

// var dishRouter = require('./dishRouter');
// //var leaderRouter = require('./leaderRouter');
// var promoRouter = require('./promoRouter');

// var app = express();

// app.set('view engine', 'hbs');

// app.use(logger('dev'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/dishes', dishRouter);
// //app.use('/leadership', leaderRouter);
// app.use('/promotions', promoRouter);

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//     var err = new Error('Not Found');
//     err.status = 404;
//     next(err);
// });

// // error handlers

// // development error handler
// // will print stacktrace
// if (app.get('env') === 'development') {
//     app.use(function(err, req, res, next) {
//         res.status(err.status || 500);
//         res.render('error', {
//             message: err.message,
//             error: err
//         });
//     });
// }

// // production error handler
// // no stacktraces leaked to user
// app.use(function(err, req, res, next) {
//     res.status(err.status || 500);
//     res.render('error', {
//         message: err.message,
//         error: {}
//     });
// });

// app.listen(port, hostname, function(){
//   console.log('Server running at http://'+hostname+':'+port);
// });
