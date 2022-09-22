const { name } = require("ejs");
const Books = require('../models/Book');

/*getBook = (async (req, res) => {
    
    try {
        console.log("hi");
        const books = await Book.find();
        console.log(books);

        res.json(books);
        console.log("hi");


    } catch (error) {
        res.json({message: error})
        
        console.log("wrong");
    }

  })*/

/*postBook = ('', async (req,res)=>{
    const book = new Book({
        id: req.body.id,
        name: req.body.name,
        score: req.body.score
    });

    try {

    const savedBook = await book.save();
    res.json(savedBook);

    } catch (error) {
        res.json({message: error}); 
    }

})*/

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

postBook = ('/newBook', async (req, res) => {
    
    const book = new Books({
        id: req.body.id,
        name: req.body.name,
        score: req.body.score
    });

    try {
        const nBook = await book.save();
        res.json(nBook);
        res.render('booksNew.ejs');
    } catch (error) {
        res.render('error.ejs');
        
    }
})

  module.exports = {
    getBook,
    postBook
  }
  