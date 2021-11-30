const http =require('http');
const fs = require('fs');
const path = require('path');
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";


let fp = path.join(__dirname,"public", "db.json");

console.log(fp);

let extension = path.extname(fp);
console.log(extension);
const app = express();

app.use(express.static(fp));

var corsOptions = {
  origin: "*"
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));

app.get('/', function (req,res) {
      //res.sendFile(fp);
      MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("bookDB");
        var mysort = { id: 1 };
        dbo.collection("books").find().toArray(function(error, result) {
          if (error) throw error;
            console.log(result);
           res.send(result);
          db.close();
        });
      });
  });

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });

