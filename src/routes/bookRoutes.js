var express = require('express');

var bookRouter = express.Router();

var router = function () {//nav) {
    var books = [
        {
            title: 'The Power of Now',
            genre: 'Non-Fiction',
            author: 'Eckhart Tolle',
            read: false
        }
];
    bookRouter.route('/')
        .get(function (req, res) {
            res.render('bookListView', {
                title: 'Books',
                //nav: nav,
                books: books
            });
        });

    bookRouter.route('/:id')
        .get(function (req, res) {
            var id = req.params.id;
            res.render('bookView', {
                title: 'Book',
                //nav: nav,
                book: books[id]
            });
        });
    return bookRouter;
};

module.exports = router;