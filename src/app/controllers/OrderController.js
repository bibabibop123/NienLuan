const Course = require('../models/Course');

class OrderController {
    async order ( req, res, next) {
        return res.render('order');
    }
}

module.exports = new OrderController;