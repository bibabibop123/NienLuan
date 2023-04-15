const Course = require('../models/Course');

class UserController {
    async user ( req, res, next) {
        return res.render('user');
    }
}

module.exports = new UserController;