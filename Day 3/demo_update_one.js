require('dotenv').config();   // do not reveal database connection info (username, password) so use environment variables

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://"+process.env.DBUSERNAME+":"+process.env.DBPASSWORD+"@cluster0.3gbo0.mongodb.net/testdb?retryWrites=true&w=majority";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("testdb");
    var myquery = {address: "Valley 345"};                          // query for document to update
    var newvals = {$set: {name: "Mickey", address: "Canyon 123"}};  // new values to update document with, use $set to specify which values to update
    dbo.collection("customers").updateOne(myquery, newvals, function(err, res) {  
        if (err) throw err;
        console.log("1 document updated");     
        db.close();
    });
});