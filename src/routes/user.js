const express = require('express');

const router = express.Router();

const userController = require('../controllers/userController');


router.get ('/login', userController.login);
router.get ('/register', userController.register);
router.get ('/adminUser', userController.adminUser);
router.get ('/editUser', userController.editUser);

module.exports = router;