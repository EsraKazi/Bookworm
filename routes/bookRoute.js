var express = require('express');
var router = express.Router();
const { 
    getBook,
//    getBookByName,
    postBook,
    getNewBook
} = require('../controllers/bookController');

router.get('/', getBook);

router.get('/newBook', getNewBook);

router.post('/newBook', postBook);

//router.get(':name',getBookByName)

module.exports = router;
