const userModel = require('../models/user');

class RegisterController {
    async register ( req, res, next) {
        res.render('register');
    }

    async registerUser(req,res,next){
        const {firstName,lastName,username,password,email,phoneNumber,address} = req.body ;
        const userExist = await userModel.findOne({username});
        console.log(userExist);
        if(userExist){
            res.send({message:'Người dùng đã tồn tại'})
        }
        await userModel.create({...req.body});
        res.redirect('/login');
    }
}

module.exports = new RegisterController;