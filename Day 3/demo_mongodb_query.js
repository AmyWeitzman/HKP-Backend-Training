require('dotenv').config();   // do not reveal database connection info (username, password) so use environment variables

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://"+process.env.DBUSERNAME+":"+process.env.DBPASSWORD+"@cluster0.3gbo0.mongodb.net/testdb?retryWrites=true&w=majority";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("testdb");
    var query = {address: "Park Lane 38"};   // find documents matching query
    dbo.collection("customers").find(query).toArray(function(err, result) {   
        if (err) throw err;
        console.log(result); 
        db.close();
    });
});