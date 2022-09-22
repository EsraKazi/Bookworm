var express = require('express');
var router = express.Router();
const { 
    getBook,
    getBookByName,
    postBook
} = require('../controllers/bookController');

router.get('/', getBook);

router.post('/newBook', postBook);

//router.get(':name',getBookByName)

module.exports = router;
