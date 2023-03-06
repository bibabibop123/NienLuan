const Course = require('../models/Course');

class CartController {
    async cart ( req, res, next) {
        const cart = req.session.cart || [];
        console.log(cart);
        res.render('cart');
    }
    async addCart(req,res,next){
        const cart = req.session.cart || [];
        console.log(cart);
        
        const cartExist = cart.find((item)=>item.id ==req.body.id);
        if(cartExist){
            let cartNew = cart.map((item)=>{
                if(item.id===req.body.id){
                    return {...item,quality:item.quality+1}
                }
            })
            req.session.cart = cartNew;
        }else {
            cart.push({
                id:'123',
                image:'item',
                name: 'name hay',
                quality:1
            })
            req.session.cart = cart;
        }
        res.send('hello, phong nguyen');
    }

    async removeCart(req,res){}
}

module.exports = new CartController;