const express = require('express');

const fs = require('fs');

const multer = require('multer');

const router = express.Router();

const productController = require('../controllers/productController');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.resolve(__dirname, '../../public/images/products'));
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage });


router.get ('/productCart', productController.productCart);

router.get ('/productdetail/:id', productController.productdetail);

router.get ('/listProducts', productController.listProducts);

router.get ('/create', productController.formularioCreacionProductos);
router.post('/createProduct', upload.single('image'), productController.store);

router.get ('/editProduct', productController.editProduct);

module.exports = router;
