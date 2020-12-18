require('dotenv').config();   // do not reveal database connection info (username, password) so use environment variables

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://"+process.env.DBUSERNAME+":"+process.env.DBPASSWORD+"@cluster0.3gbo0.mongodb.net/testdb?retryWrites=true&w=majority";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("testdb");
    dbo.collection("customers").find({}, {projection: {_id: 0, name: 1, address: 1}}).toArray(function(err, result) {   // find all documents and project specified fields
        if (err) throw err;
        console.log(result);  // print array of documents
        db.close();
    });
});