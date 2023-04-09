const Course = require('../models/Course');

class AdminCreateController {
    async adminCreate ( req, res, next) {
        return res.render('admin/create-admin',{layout:'admin'});
    }
}

module.exports = new AdminCreateController;