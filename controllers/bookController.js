const { name } = require("ejs");
const Books = require('../models/Book');

getBook =('/',async (req, res) => {
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


/*getBookByName = (':name', async (req, res) => {
    name = Book1
    try {
        const response = await fetch(url);
        const searchedName = await response.json();
        res.render("book.ejs", {
            bookData: searchedName})
    } catch (error) {
        res.render('error.ejs');
    }
  })
*/
  module.exports = {
    getBook,
    postBook,
    getNewBook
//  getBookByName
  }
  