const express = require('express');
const router = express.Router();


const orderController = require('../app/controllers/OrderController');

router.get('/', orderController.order);

module.exports = router;