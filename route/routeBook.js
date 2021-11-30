var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var bookModel = require('../collections/books');
 
 
/* GET home page. */
router.get('/', function(req, res, next) {
      
    bookModel.find((err, docs) => {
        if (!err) {
            res.render("list", {
                data: docs
            });
        } else {
            console.log('Failed to retrieve the Course List: ' + err);
        }
    });
 
});
module.exports = router;