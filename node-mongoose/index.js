const mongoose = require('mongoose');

const Dishes = require('./models/dishes');

const url = 'mongodb://localhost:27017/conFusion';

const connect = mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});

connect.then((db) => {
    console.log('Connected correctly to Server');
    Dishes.create({
        name : 'Dish-2',
        description : 'Desc of Dish-2 using Schema'
    })
   .then((dish) => {
        console.log(dish);
        
        return Dishes.findByIdAndUpdate( dish._id, {
            $set : { description : 'Updated Description '}
        }, {
            new : true   
        }).exec();
    })
    .then((dish) => {
        console.log(dish)
        dish.comments.push({
            rating : 5,
            comment : 'This is the comment for the dish',
            author : 'Kalpan Tumdi'
        });
        return dish.save();
    })
    .then((dish) => {
        console.log(dish);
        return Dishes.deleteMany({})
    })
    .then(() => {
        return mongoose.connection.close();
    })
    .catch((err) => {
        console.log(err);
    })
})