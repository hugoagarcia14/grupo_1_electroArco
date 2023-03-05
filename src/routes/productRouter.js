const express = require('express');

const router = express.Router();

const productController = require('../controllers/productController');


router.get ('/productCart', productController.productCart);
router.get ('/productdetail', productController.productdetail);
router.get ('/listProducts', productController.listProducts);
router.get ('/formCreationProduct', productController.formularioCreacionProductos);
router.get ('/editProduct', productController.editProduct);

module.exports = router;
