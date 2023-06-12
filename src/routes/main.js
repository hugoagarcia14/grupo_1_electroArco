 const express = require ('express'); 

 const router = express.Router ();

 const mainController = require ('../controllers/mainController');

 

 router.get ('/',mainController.index);
 /*
 router.get ('/register', mainController.register);
 router.get ('/productdetail', mainController.productdetail);
 router.get ('/productCart', mainController.productCart);
 router.get ('/login', mainController.login);
 router.get ('/formCreationProduct', mainController.formularioCreacionProductos);
 router.get ('/editProduct', mainController.editProduct);
 router.get ('/homeAdmin', mainController.homeAdmin);*/
 
 
 module.exports = router;