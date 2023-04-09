const Course = require('../models/Course');

class AdminCancelController {
    async adminCancel ( req, res, next) {
        return res.render('admin/order-cancel',{layout:'admin'});
    }
}

module.exports = new AdminCancelController;