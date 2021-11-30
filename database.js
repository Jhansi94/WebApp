var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

module.exports. mongoConnect = ()=>{

    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("bookDB");
        console.log("Connected to MongoDB");
        //Find the first document in the customers collection:
        dbo.collection("books").find({}).toArray(function(err, result) {
          if (err) throw err;
          console.log(result.name);
          db.close();
        });
      });
      
}




/*const MongoClient = require('mongodb').MongoClient;
const mongoose = require("mongoose");

const dburl = 'mongodb://127.0.0.1:27017';

const connection = mongoose.connect(dburl, {
    useNewUrlParser: true, useUnifiedTopology: true });


module.exports. mongoConnect = ()=>{
    if(connection){
            console.log("MongoDB connected");
            var dbo = db.db("bookDB");
            //Find the first document in the customers collection:
            dbo.collection("books").findOne({
            name: req.params.title
            }, 
        function(err, result) {
            if (err) throw err;
            res.json(result);
            db.close();
        });

    }else{

        console.log("MONGODB connection error");
        return "Failed";
    }
}*/





