const express = require('express');

const router = express.Router();

const productController = require('../controllers/productController');


router.get ('/productCart', productController.productCart);
router.get ('/productdetail', productController.productdetail);
router.get ('/listProducts', productController.listProducts);

module.exports = router;
