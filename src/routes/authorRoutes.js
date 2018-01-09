var express = require('express');

var authorRouter = express.Router();

var router = function(nav){

    var authors = [{
   "title": "Author 1" ,
   "author": "sagar"
},{
   "title": "Author 2" ,
   "author": "sagar"
},{
   "title": "Author 3" ,
   "author": "sagar"
},{
   "title": "Author 4" ,
   "author": "sagar"
},{
   "title": "Author 5" ,
   "author": "sagar"
}];

    authorRouter.route('/')
    .get(function(req,res){
        res.render('books', {title: 'Authors', nav : nav, books: authors})
    })

    return authorRouter;
}

module.exports = router;