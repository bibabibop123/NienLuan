const Course = require('../models/Course');

class AdminConfirmController {
    async adminConfirm ( req, res, next) {
        return res.render('admin/order-confirm',{layout:'admin'});
    }
}

module.exports = new AdminConfirmController;