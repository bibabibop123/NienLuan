const Course = require('../models/Course');

class CartController {
    async cart ( req, res, next) {
        res.render('cart');
    }
}

module.exports = new CartController;