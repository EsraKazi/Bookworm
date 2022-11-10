const express = require('express');
const { 
    getSignIn,
    postSignIn,
    getSignUp,
    postSignUp

} = require('../controllers/authController');
const router = express.Router();


router.get('/login', getSignIn); // Getting sign in page

router.post('/login', postSignIn); // Posting ^^

router.get('/register',getSignUp); // Getting sign Up Page

router.post('/register', postSignUp);


module.exports = router;