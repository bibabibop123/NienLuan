const Course = require('../models/Course');

class PaymentController {
    async payment ( req, res, next) {
        return res.render('payment');
    }
}

module.exports = new PaymentController;