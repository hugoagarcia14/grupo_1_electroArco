const express = require('express');

const path = require('path');

const { body } = require('express-validator');

const router = express.Router();

const userController = require('../controllers/userController');

const uploadFile = require('../middlewares/multerMiddleware');

const validations = require('../middlewares/validateRegisterMiddleware');


router.get ('/login', userController.login);
router.post ('/login', userController.loginProcess);

router.get ('/register', userController.register);
router.post('/register', uploadFile.single("image"), validations, userController.store);

//Procesar el registro
;

router.get('/detail/:id', userController.detail);

router.get('/detail/edit/:id', userController.editUser);
router.put('/detail/edit/:id', uploadFile.single("image"), userController.update);

router.delete('/detail/delete/:id', userController.destroy);

router.get('/profile', userController.profile);


module.exports = router;