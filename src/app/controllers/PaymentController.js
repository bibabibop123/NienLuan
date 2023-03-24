const Course = require('../models/Course');

class PaymentController {
    async payment ( req, res, next) {
        // if(!req.user){
        //     req.flash('message', 'Vui lòng đăng nhập để tiến hành thanh toán !!!');
        //     return res.redirect('/login');
        // }
        return res.render('payment');
    }

    async paymentConfirm(){
        
    }
}

module.exports = new PaymentController;