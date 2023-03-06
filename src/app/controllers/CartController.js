const Course = require('../models/Course');

class CartController {
    async cart ( req, res, next) {
        const cart = req.session.cart || [];
        console.log(cart);
        res.render('cart');
    }
    async addCart(req,res,next){
        const id = req.params.id;
        const product = await Course.findById(id);
        console.log('product',product);
        if(!product){
            return res.redirect('/');
        }
        const cart = req.session.cart || [];
        console.log(cart);
        
        const cartExist = cart.find((item)=>item.id ===id);
        if(cartExist){
            let cartNew = cart.map((item)=>{
                if(item.id==id){
                    return {...item,quality:item.quality+1}
                }
                return item;
            })
            console.log('cartNew',cartNew);
            req.session.cart = cartNew;
        }else {
            cart.push({
                id: product._id,
                image:product.img,
                name: product.name_content,
                quality:1
            })
            req.session.cart = cart;
        }
        req.flash('message', ' Thêm sản phẩm thành công vào giỏ hàng !!!');
        return res.redirect(`/detail/${product.name_content}`)
    }

    async removeCart(req,res){}
}

module.exports = new CartController;