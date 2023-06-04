const express = require('express');
const router = express.Router();
const productsAPIController = require('../../controllers/api/productController');

router.get('/', productsAPIController.list);

router.get('/:id', productsAPIController.detail);

/*router.post('/create', productsAPIController.create);

router.put('/update/:id', productsAPIController.update);

router.delete('/delete/:id', productsAPIController.destroy);*/

module.exports = router;