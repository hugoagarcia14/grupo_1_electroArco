

const express= require('express');

const router= express.Router();

const userController = require('../controllers/userController');
const userLoggedMiddleware= require('../middlewares/userLogged');

router.use(userLoggedMiddleware);

router.get ('/adminUser', userController.adminUser);
router.get ('/editUser', userController.editUser);

module.exports=router;
