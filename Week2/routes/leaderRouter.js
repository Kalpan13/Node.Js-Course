const express = require('express');
const leaderRouter  = express.Router();
const mongoose = require('mongoose');
const Leaders = require('../models/leaders');
const chalk = require('chalk');


leaderRouter.route('/')
.get((req,res,next) => {
	Leaders.find({})
    .then((leaders) => {
		res.statusCode = 200;
		res.setHeader('Content-Type','application/json');
        res.json(leaders);
    }, (err) => {
        next(err);
	})
	.catch((err) => {
	next(err);
	});
})

.post((req,res,next) => {
	Leaders.create(req.body)
	.then((leader) => {
		console.log(chalk.green('Leader Created Successfully'));
		res.statusCode = 200;
		res.setHeader('Content-Type','application/json');
		res.json(leader)
	}, (err) => {
		next(err);
	})
	.catch((err) => {
		next(err);
	});
})

.delete((req,res,next) => {
	Leaders.deleteMany({})
	.then((resp) => {
		res.statusCode = 400;
		res.setHeader('Content-Type','application/json');
		res.json(resp);
	},(err) => {
		next(err);
	})
	.catch((err) => {
		next(err);
	})
})
.put((req,res,next) => {
	res.writeHead(200, { 'Content-Type': 'text/plain' });
	res.end('PUT operation not supported on /leaders');
});


leaderRouter.route('/:leaderId')
.get((req,res,next) => {
 	Leaders.findById(req.params.leaderId)
	.then((leaders) => {
		res.statusCode = 200;
		res.setHeader('Content-Type','application/json');
        res.json(leaders);
    }, (err) => {
        next(err);
	})
	.catch((err) => {
	next(err);
	});
})

.put((req,res,next) => {

	Leaders.findByIdAndUpdate(req.params.leaderId, {
		$set : req.body
	}, {
		new : true
	})
	.then((leader) => {
		res.statusCode = 200;
		res.setHeader('Content-Type','application/json');
		res.json(leader);
	}, (err) => {
		next(err);
	})
	.catch((err) => {
		next(err);
	})
})

.delete(function(req, res, next){
	Leaders.findByIdAndRemove(req.params.leaderId)
	.then((resp) => {
		res.statusCode = 200;
		res.setHeader('Content-Type','application/json');
		res.json(resp);
	},(err) => {
		next(err);
	})
	.catch((err) => {
		next(err);
	})
});

module.exports = leaderRouter;