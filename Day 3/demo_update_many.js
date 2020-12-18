require('dotenv').config();   // do not reveal database connection info (username, password) so use environment variables

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://"+process.env.DBUSERNAME+":"+process.env.DBPASSWORD+"@cluster0.3gbo0.mongodb.net/testdb?retryWrites=true&w=majority";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("testdb");
    var myquery = {address: /^S/};          // update documents where address starts with "S"                          // query for document to update
    var newvals = {$set: {name: "Minnie"}};  // update name
    dbo.collection("customers").updateMany(myquery, newvals, function(err, res) {  
        if (err) throw err;
        console.log(res.result.nModified + " document(s) updated");    // print number of documents updated
        db.close();
    });
});