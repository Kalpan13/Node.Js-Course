const express = require('express');
const dishRouter = express.Router();

dishRouter.route('/')

.all((req,res,next)=> {
    res.writeHead(200,{'Content-Type':'text/plain'});
    next();  
})

.get((req,res,next)=> {
    res.end("We will send all dishes to you");
})

.post((req, res, next)=> {
    res.end('Will add the dish: ' + req.body.name + ' with details: ' + req.body.description);    
})

.delete((req,res,next)=> {
    res.end("Deleting all dishes");
});

dishRouter.route('/:dishId')
.all((req,res,next)=> {
    res.writeHead(200,{'Content-Type':'text/plain'});
    next();
})

.get((req,res,next)=> {
    res.end("We will send details of the dish :"+req.params.dishId+" to you");
})

.put((req,res,next)=> {

    res.write("Updating the dish : "+req.params.dishId +"\n");
    res.end('Will update the dish: ' + req.body.name + 
            ' with details: ' + req.body.description);
})

.delete((req, res, next) => {
    res.end('Deleting dish: ' + req.params.dishId);
})

.post((req, res, next) => {
    res.end('Post Operation not supported on dish'+req.url);
});

module.exports = dishRouter;