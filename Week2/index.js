const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const dishRouter = require('./routes/dishRouter');
const promoRouter = require('./routes/promoRouter');
const leaderRouter = require('./routes/leaderRouter');

const hostname = 'localhost';
const port = 3000;
const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/conFusion';
const connect = mongoose.connect(url);



const app = express();
app.use(morgan("dev"));
app.use(bodyParser.json());

app.use('/dishes',dishRouter);
app.use('/promotions',promoRouter);
app.use('/leaders', leaderRouter);

connect.then((db) => {
  console.log('Connected Correctly to Server');
}, (err) => {
  console.log(err);
});  


app.use(express.static(__dirname+ "/public"));
app.use((req,res,next) => {
    console.log(req.headers);
    res.statusCode = 200;
    res.setHeader("Content-Type","text/html" );
    res.end("<html><body>ddeedd<body></html>");
});


const server = http.createServer(app);
server.listen(port,hostname,() => {
    console.log("server started at http://"+hostname+":"+port+"/");
});