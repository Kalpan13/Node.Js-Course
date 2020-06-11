const assert = require('assert');

exports.insertDocument = (db,collection,document, callback) => {
    const coll = db.collection(collection);
    return coll.insertOne(document); 
};

exports.findDocument = (db,collection,callback) => {
    const coll = db.collection(collection);
    return coll.find({}).toArray();
};

exports.removeDocument = (db,collection,document, callback) => {
    const coll = db.collection(collection);
    return coll.removeOne(document);
};

exports.updateDocument = (db,collection,update, document, callback) => {
    const coll = db.collection(collection);
    return coll.updateOne(document,{$set:update},null);
};


