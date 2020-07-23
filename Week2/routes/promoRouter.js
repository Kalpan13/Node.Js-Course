const express = require('express');
const promoRouter  = express.Router();
const mongoose = require('mongoose');
const Promotions = require('../models/promotions');
const chalk = require('chalk');

promoRouter.route('/')
.get(function(req,res,next){
	Promotions.find({})
	.then((promotions) => {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'application/json');
		res.json(promotions);
	}, (err) => {
		next(err);
	})
	.catch((err) => {
		next(err);
	})
})

.post(function(req, res, next){
	Promotions.create(req.body)
	.then((promotion) => {
		console.log(chalk.green('Successfully added Promotion'));
		res.statusCode = 200;
		res.setHeader('Content-Type', 'application/json');
		res.json(promotion);
	},(err) => {
		next(err);
	})
	.catch((err) => {
		next(err);
	})
})

.delete(function(req, res, next){
	Promotions.deleteMany({})
	.then((resp) => {
		res.statusCode = 200;
		res.setHeader('Content-Type','application/json');
		res.json(resp);
	}, (err) => {
		next(err);
	})
	.catch((err) => {
		next(err);
	})
});

promoRouter.route('/:promoId')

.get(function(req,res,next){
	Promotions.findById(req.params.promoId)
	.then((promotions) => {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'application/json');
		res.json(promotions);
	},(err) => {
		next(err);
	})
	.catch((err) => {
		next(err);
	})
})
.put(function(req, res, next){
  Promotions.findByIdAndUpdate(req.params.promoId, {
	  $set : req.body
  }, {
	  new : true
  })
  .then((promotion) => {
	  res.statusCode = 200;
	  res.setHeader('Content-Type','application/json');
	  res.json(promotion);
  }, (err) => {
	  next(err);
  })
  .catch((err) => {
	  next(err);
  })
})

.delete(function(req, res, next){
	Promotions.findByIdAndDelete(req.params.promoId)
	.then((resp) => {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'application/json');
		res.json(resp);
	},(err) => {
		next(err);
	})
	.catch((err) => {
		next(err);
	})
});

module.exports = promoRouter;