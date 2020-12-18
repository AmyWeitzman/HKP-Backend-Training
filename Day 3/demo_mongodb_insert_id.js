require('dotenv').config();   // do not reveal database connection info (username, password) so use environment variables

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://"+process.env.DBUSERNAME+":"+process.env.DBPASSWORD+"@cluster0.3gbo0.mongodb.net/testdb?retryWrites=true&w=majority";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("testdb");
    var myobjs = [   // insert objects with specified ids
        { _id: 154, name: 'Amy', address: '987 Blue Ridge'},
        { _id: 155, name: 'Matt', address: '456 Orchard'},
        { _id: 156, name: 'Helen', address: '123 ABC'}
    ];
    dbo.collection("customers").insertMany(myobjs, function(err, res) {
        if (err) throw err;
        console.log(res);  // result of insert: contains info about records inserted
        db.close();
    });
});