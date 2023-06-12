const express = require('express');
const router = express.Router();
const usersAPIController = require('../../controllers/api/userConroller');

router.get('/', usersAPIController.list);

router.get('/:id', usersAPIController.detail);

router.post('/create', usersAPIController.create);

router.put('/update/:id', usersAPIController.update);

router.delete('/delete/:id', usersAPIController.destroy);

module.exports = router;