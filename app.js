var express = require('express');

var app = express();
var sql = require('mssql');
var config = {
    user: 'books',
    password: 'pluralsight1@',
    server: 'gpnju6fwr2.database.windows.net',
    database: 'Books',
    options: {
        encrypt: true
    }
}

var port = 3000;
var nav =  [{
                Link:'/Books',
                Text: 'Books'
            },
            {
                Link:'/Authors',
                Text: 'Authors'
            }
            ];
var bookRouter = require('./src/routes/bookRoutes')(nav);

var authorRouter = require('./src/routes/authorRoutes')(nav);

app.use(express.static('public'));
app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use('/Books', bookRouter);
app.use('/Authors', authorRouter);

app.get('/', function(req, res){
    res.render("index", {title: 'EJS', nav : [{Link:'/Books', Text: 'Books'},{Link:'/Authors', Text: 'Authors'}]});
});

app.get('/books', function(req, res){
    res.send("Hello books");
});

app.listen(port, function(err){
    console.log("running");
});