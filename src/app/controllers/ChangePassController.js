const Course = require('../models/Course');

class ChangePassController {
    async changePass ( req, res, next) {
        return res.render('change-password');
    }
}

module.exports = new ChangePassController;