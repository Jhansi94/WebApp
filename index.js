const http =require('http');
const fs = require('fs');
const path = require('path');
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

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
      res.sendFile(fp);
  });

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });

/*const server= http.createServer((req, res) => {
    // Write response

    let fp= path.join(__dirname,"public", "sample.json");

    console.log(fp);

    let extension = path.extname(fp);
    console.log(extension);


   if(req.url==='/api'){
        fs.readFile(path.join(__dirname,'public','db.json'),(err,content)=>{
            if (err) throw err;
            res.writeHead(200,{'Content-Type':'application/json'})
            res.end(content);
        });
    }




});
  
const PORT =process.env.PORT || 3000
server.listen(PORT, () => console.log('Server running...'));

*/

/*console.log("Server App");
var express = require("express");
var mongoServer = require("./database")

// Connecting to database

const dburl = 'mongodb://localhost:27017';
const dbname = 'bookDB';
const collname = 'books';


var app = express();


app.get('/', (req, res) => res.send(mongoServer.mongoConnect()))

// Start the Express server
app.listen(3000, () => console.log('Server running on port 3000!'));  
*/

