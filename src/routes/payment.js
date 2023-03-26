const express = require('express');
const router = express.Router();


const paymentController = require('../app/controllers/PaymentController');

router.get('/', paymentController.payment);
router.post('/',paymentController.paymentConfirm);

module.exports = router;