const express = require('express');
const router = express.Router();


const cartController = require('../app/controllers/CartController');

router.get('/', cartController.cart)
router.post('/add',cartController.addCart);
router.post('/remove',cartController.removeCart)
module.exports = router;