const Course = require('../models/Course');
const USERNAME ='admin@gmail.com';
const PASSWORD ='admin';
class LoginController {
    async login ( req, res, next) {
        res.render('login');
    }
    async loginAction(req,res){
        const {username,password} = req.body;
        console.log(username,password);
        if(username==USERNAME && password==PASSWORD){
            res.redirect('/courses/list');
        }
        else{
            res.redirect('/login');
        }
    }
}

module.exports = new LoginController;