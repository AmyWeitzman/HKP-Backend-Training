require('dotenv').config();   // do not reveal database connection info (username, password) so use environment variables

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://"+process.env.DBUSERNAME+":"+process.env.DBPASSWORD+"@cluster0.3gbo0.mongodb.net/testdb?retryWrites=true&w=majority";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("testdb");
    dbo.collection("customers").find().limit(5).toArray(function(err, result) {  // return at most 5 results
        if (err) throw err;
        console.log(result);   
        db.close();
    });
});