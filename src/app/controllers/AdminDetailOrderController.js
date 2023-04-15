const Course = require('../models/Course');

class AdminDetailOrderController {
    async adminDetailOrder ( req, res, next) {
        return res.render('admin/detail-order',{layout:'admin'});
    }
}

module.exports = new AdminDetailOrderController;