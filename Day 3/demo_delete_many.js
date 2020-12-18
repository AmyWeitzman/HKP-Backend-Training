require('dotenv').config();   // do not reveal database connection info (username, password) so use environment variables

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://"+process.env.DBUSERNAME+":"+process.env.DBPASSWORD+"@cluster0.3gbo0.mongodb.net/testdb?retryWrites=true&w=majority";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("testdb");
    var myquery = {address: /^O/};  // query for documents to delete: address starts with "O"
    dbo.collection("customers").deleteMany(myquery, function(err, obj) {  
        if (err) throw err;
        console.log(obj.result.n + " document(s) deleted");   // print number of documents deleted
        db.close();
    });
});