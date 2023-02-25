const Course = require('../models/Course');

class RegisterController {
    async register ( req, res, next) {
        res.render('register');
    }
}

module.exports = new RegisterController;