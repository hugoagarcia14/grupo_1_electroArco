const express = require('express');

const router = express.Router();

const userController = require('../controllers/userController');
const uploadFile = require('../middlewares/multerMiddleware')


router.get ('/login', userController.login);

router.get ('/adminUser', userController.adminUser);

router.get ('/register', userController.register);
router.post('/adminUser', uploadFile.single("image"), userController.store);

router.get ('/editUser', userController.editUser);

module.exports = router;