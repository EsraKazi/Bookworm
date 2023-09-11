const express = require('express');
const { 
    getUsers,
    getUser,
 //   updateUser,
    deleteUser

} = require('../controllers/userController');
const router = express.Router();

router.get('/', getUsers); // All users

router.get('/:username',getUser); //user profile, not completed

//router.put('/users/:username', updateUser);

router.delete('/:username', deleteUser);

module.exports = router;