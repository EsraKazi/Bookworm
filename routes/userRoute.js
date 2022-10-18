const express = require('express');
const { 
    getUsers,
    getSignIn,
    postSignIn,
    getSignUp,
    postSignUp

} = require('../controllers/userController');
const router = express.Router();

router.get('/', getUsers);

router.get('/login', getSignIn);

router.post('/login', postSignIn);

router.get('/register',getSignUp);

router.post('/register', postSignUp);

module.exports = router;