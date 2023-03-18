const express = require('express');

const router = express.Router();

const userController = require('../controllers/userController');
const uploadFile = require('../middlewares/multerMiddleware')


router.get ('/login', userController.login);



router.get ('/register', userController.register);
router.post('/register', uploadFile.single("image"), userController.store);

router.get('/detail/:id', userController.detail);

router.get('/detail/edit/:id', userController.editUser);
router.put('/detail/edit/:id', uploadFile.single("image"), userController.update);

router.delete('/detail/delete/:id', userController.destroy);


module.exports = router;