const express = require('express');
const router = express.Router();


const cartController = require('../app/controllers/CartController');

router.get('/', cartController.cart)
router.get('/add-cart/:id',cartController.addCart);
router.get('/remove-cart/:id',cartController.removeCart)
module.exports = router;