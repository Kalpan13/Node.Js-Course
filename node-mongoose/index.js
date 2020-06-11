const mongoose = require('mongoose');

const Dishes = require('./models/dishes');

const url = 'mongodb://localhost:27017/conFusion';

const connect = mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});

connect.then((db) => {
    console.log('Connected correctly to Server');
    Dishes.create({
        name : 'Dish-1',
        description : 'Desc of Dish-1 using Schema'
    })
   .then((dish) => {
        console.log(dish);
        Dishes.find({}).exec();
    })
    .then((dishes) => {
        console.log(dishes);
        return Dishes.deleteMany({});
    })
    .then(() => {
        return mongoose.connection.close();
    })
    .catch((err) => {
        console.log(err);
    })
})