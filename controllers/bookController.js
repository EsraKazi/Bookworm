const { name } = require("ejs");
const Books = require('../models/Book');

getBook =('/all',async (req, res) => {
    try {
        var book = await Books.find();
        res.render('books.ejs',{
            bookData: book
        })
    } catch (error) {
        res.render('error.ejs');
        
    }
})
getNewBook =('/newBook',async (req, res) => {

        res.render('booksNew.ejs');
})

postBook = ('/newBook', async (req, res) => {
    
    const book = new Books({
        title: req.body.title,
        author: req.body.author,
        publisher: req.body.publisher,
        year: req.body.year,
        page: req.body.page,
        score: req.body.score
    });

    try {
        const savedBook = await book.save();
        res.redirect('/books');
    } catch (error) {
        res.render('error.ejs');
        
    }
})


getBookByName = ('/books/:title', async (req, res) => {
    title = req.params.title;
    try {
        const searchedBook = await Books.find({title : title });
        res.render("bookProfile.ejs", {
            bookData: searchedBook})
    } catch (error) {
        res.render('error.ejs');
    }
  })

  module.exports = {
    getBook,
    postBook,
    getNewBook,
    getBookByName
  }
  