const Course = require('../models/Course');

class AdminOrderController {
    async adminOrder ( req, res, next) {
        return res.render('admin/order',{layout:'admin'});
    }
}

module.exports = new AdminOrderController;