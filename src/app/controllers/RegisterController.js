const Course = require('../models/Course');

class RegisterController {
    async register ( req, res, next) {
        res.render('register');
    }

    async registerUser(req,res,next){
        res.send(req.body);
    }
}

module.exports = new RegisterController;