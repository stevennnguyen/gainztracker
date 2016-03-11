var express = require('express');

var bookRouter = express.Router();

var books = [
    {
        title: 'war and niece',
        genre: 'poop',
        author: 'stovin',
        read: false
    },
    {
        title: 'war and niece 222',
        genre: 'poop',
        author: 'stovin',
        read: false
    },
    {
        title: 'war and niece 33 ',
        genre: 'poop',
        author: 'stovin',
        read: false
    },
    {
        title: 'war and niece 4',
        genre: 'poop',
        author: 'stovin',
        read: false
    }
];
bookRouter.route('/')
    .get(function (req, res) {
        res.render('bookListView', {
            title: 'hello from the other side',
            nav: [{
            Link: '/Books',
            Text: 'Books'
        }, {
            Link: '/Authors',
            Text: 'Authors'
        }],
            books: books
        });
    });

bookRouter.route('/:id')
    .get(function (req, res) {
        var id = req.params.id;
        res.render('bookView', {
            title: 'hello from the other side',
            nav: [{
            Link: '/Books',
            Text: 'Books'
        }, {
            Link: '/Authors',
            Text: 'Authors'
        }],
            book: books[id]
        });
    });

module.exports = bookRouter;