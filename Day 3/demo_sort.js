require('dotenv').config();   // do not reveal database connection info (username, password) so use environment variables

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://"+process.env.DBUSERNAME+":"+process.env.DBPASSWORD+"@cluster0.3gbo0.mongodb.net/testdb?retryWrites=true&w=majority";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("testdb");
    var mysort = {name: 1};   // 1 = ASC, -1 = DESC
    dbo.collection("customers").find().sort(mysort).toArray(function(err, result) {   // find documents and return results sorted by name ASC 
        if (err) throw err;
        console.log(result); 
        db.close();
    });
});