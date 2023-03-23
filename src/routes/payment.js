const express = require('express');
const router = express.Router();


const paymentController = require('../app/controllers/PaymentController');

router.use('/', paymentController.payment);

module.exports = router;