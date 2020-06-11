const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");
const dbOpr = require('./operations');
const url = 'mongodb://localhost:27017/conFusion';
const dbname = 'conFusion';
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const connect = mongoose.connect(url);

MongoClient.connect(url).then((client) => {
    
    console.log("Connected Correctly to Server");
    const db = client.db(dbname);

    dbOpr.insertDocument(db,'dishes',{name : "Dish13", description: "Desc of Dish13"})
    .then((result) => {

        console.log("Insert Document :\n",result.ops);
    
        return dbOpr.findDocument(db,'dishes')
    })
    .then((docs) => {
        console.log("List of Documents :\n",docs.ops);
    
        return dbOpr.updateDocument(db,'dishes',{name:"Dish13"},{description:"Updated Desc for Dish13"})
    })
    .then((result) => {
        console.log("Updated document : \n", result.result);
            
        db.dropCollection('dishes')
    })
    .then((result) => {
        console.log("Dropped Collection :",result);
        client.close();
    })
    .catch((err)=> console.log(err)); 
})
.catch((err)=>console.log(err));