const userModel = require('../models/user');

class RegisterController {
    async register ( req, res, next) {
        console.log(res.locals.message);
        res.render('register');
    }

    async registerUser(req,res,next){
        const {username} = req.body ;
        const userExist = await userModel.findOne({username});
        if(userExist){
            req.flash('message', 'Người dùng đã tồn tại')
            res.redirect('/register');
        }
        await userModel.create({...req.body});
        req.flash('message', 'Đăng ký thành công !!!')
        res.redirect('/login');
    }
}

module.exports = new RegisterController;