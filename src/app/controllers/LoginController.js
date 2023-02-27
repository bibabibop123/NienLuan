const UserModel = require('../models/user');
const USERNAME ='admin@gmail.com';
const PASSWORD ='admin';
class LoginController {
    async login ( req, res, next) {
        res.render('login');
    }
    async loginAction(req,res){
        const {username,password} = req.body;
        console.log(username,password);
        const userExist = await UserModel.find({username});
        if(!userExist){
            req.flash('message', 'Tên người dùng không tồn tại !!!');
            return res.redirect('/login');
        }
        if(userExist.password != password){
            req.flash('message', 'Mật khẩu không đúng !!!');
            return res.redirect('/login');
        }
        res.redirect('/courses/list');
    }
}

module.exports = new LoginController;