const express = require('express');
const { 
    getUsers,
    getUser,
 //   updateUser,
 //   deleteUser

} = require('../controllers/userController');
const router = express.Router();

router.get('/', getUsers); // All users

router.get('/user-profile/:username',getUser); //user profile, not completed

//router.put('/users/:username', updateUser);

//router.delete('/users/:username', deleteUser);

module.exports = router;