const express = require('express');
const router = express.Router();
const OrderController = require('../Controllers/OrderController');
const { authentication, isAdmin } = require('../middlewares/authentication');

router.post('/', authentication, isAdmin, OrderController.create)
router.get('/', authentication, OrderController.getAll)

module.exports = router;