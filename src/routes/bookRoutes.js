var express = require('express');

var bookRouter = express.Router();

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
        res.render("books", {title: 'Books', nav : [{Link:'/Books', Text: 'Books'},{Link:'/Authors', Text: 'Authors'}], books: books});
    });

bookRouter.route('/:id')
    .get(function(req, res){
        var id = req.params.id;
        console.log(id);
        res.render("bookView", {title: 'Books', nav : [{Link:'/Books', Text: 'Books'},{Link:'/Authors', Text: 'Authors'}], book: books[id]});
    });

module.exports = bookRouter;