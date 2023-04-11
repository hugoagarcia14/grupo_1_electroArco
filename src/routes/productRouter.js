const express = require('express');

const path = require('path');

const fs = require('fs');

const multer = require('multer');

const { body } = require('express-validator');

const router = express.Router();

const productController = require('../controllers/productController');

const validations = require('../middlewares/validateRegisterMiddleware');

const guestMiddleware = require('../middlewares/guestMiddleware');

const authMiddleware = require('../middlewares/authMiddlewares');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.resolve(__dirname, '../public/images/products'));
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage });


router.get ('/productCart', authMiddleware, productController.productCart);

router.get ('/productdetail/:id', productController.productdetail);

router.get ('/formCreationProduct', authMiddleware, productController.formCreationProduct);
router.post('/', upload.single('image'), authMiddleware, productController.store);

router.post('/createProduct', upload.single('image'), productController.store);

router.get ('/editProduct/:id', authMiddleware, productController.editProduct);
router.put('/editProduct/:id', upload.single('image'), productController.update); 

router.delete('/productdetail/delete/:id', authMiddleware, productController.destroy);

module.exports = router;
