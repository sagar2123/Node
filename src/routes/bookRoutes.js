var express = require('express');

var bookRouter = express.Router();

var route = function(nav){
    var books = [{
   "title": "Book 1" ,
   "author": "sagar"
},{
   "title": "Book 2" ,
   "author": "sagar"
},{
   "title": "Book 3" ,
   "author": "sagar"
},{
   "title": "Book 4" ,
   "author": "sagar"
},{
   "title": "Book 5" ,
   "author": "sagar"
}];

bookRouter.route('/')
    .get(function(req, res){
        res.render("books", {title: 'Books', nav : nav, books: books});
    });

bookRouter.route('/:id')
    .get(function(req, res){
        var id = req.params.id;
        console.log(id);
        res.render("bookView", {title: 'Books', nav : nav, book: books[id]});
    });

    return bookRouter
}

module.exports = route;