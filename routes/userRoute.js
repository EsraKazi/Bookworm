const express = require('express');
const { 
    getUsers,
    getUser,
    getSignIn,
    postSignIn,
    getSignUp,
    postSignUp

} = require('../controllers/userController');
const router = express.Router();

router.get('/users', getUsers); // All users

router.get('/:username',getUser); //user profile, not completed

router.get('/login', getSignIn); // Getting sign in page

router.post('/login', postSignIn); // Posting ^^

router.get('/register',getSignUp); // Getting sign Up Page

router.post('/register', postSignUp);


module.exports = router;