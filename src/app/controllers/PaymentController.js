const Course = require('../models/Course');

class PaymentController {
    async payment ( req, res, next) {
        // if(!req.user){
        //     req.flash('message', 'Vui lòng đăng nhập để tiến hành thanh toán !!!');
        //     return res.redirect('/login');
        // }\
        const cart = req.session.cart || [];
        let total =0;
        cart.forEach(element => {
            total += element.price * element.quality;
        });
        if(cart.length ==0){
            req.flash('message', 'Giỏ hàng trống vui lòng thêm sản phẩm !!!');
            return res.redirect('/');
        }
        return res.render('payment',{cart:cart,total:total});
    }

    async paymentConfirm(req,res){
        console.log('req.body',req.body);
    }
}

module.exports = new PaymentController;