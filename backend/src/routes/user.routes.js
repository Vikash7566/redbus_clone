const express = require('express');
const router = express();
router.use(express.json());

const userController = require('../controllers/user.controller');
router.post('/register', userController.userRegister);
router.get('/login', userController.userLogin);
router.get('/getAllUsers', userController.getAllUsers);

module.exports = router;
