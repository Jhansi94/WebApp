const mongoose = require("mongoose");


const bookSchema = new mongoose.Schema({
    _id: Number,
    title: String,
    year: Number,
    published: Boolean
});

const Book = mongoose.model('books', bookSchema);

module.exports =  Book;

