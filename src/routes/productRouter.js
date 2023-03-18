const express = require('express');

const path = require('path');

const fs = require('fs');

const multer = require('multer');

const router = express.Router();

const productController = require('../controllers/productController');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.resolve(__dirname, '../public/images/products'));
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage });


router.get ('/productCart', productController.productCart);

router.get ('/productdetail/:id', productController.productdetail);

router.get ('/formCreationProduct', productController.formCreationProduct);
router.post('/', upload.single('image'), productController.store);

router.post('/createProduct', upload.single('image'), productController.store);

router.get ('/editProduct/:id', productController.editProduct);
router.put('/editProduct/:id', upload.single('image'), productController.update); 

router.delete('/productdetail/delete/:id', productController.destroy);

module.exports = router;
