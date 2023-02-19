 const express = require ('express'); 

 const mainController = require ('../controllers/mainController');

 const router = express.Router ();

 router.get ('/',mainController.index);
 router.get ('/register', mainController.register);
 router.get ('/productdetail', mainController.productdetail);
 router.get ('/productCart', mainController.productCart);
 router.get ('/login', mainController.login);

 module.exports = router;