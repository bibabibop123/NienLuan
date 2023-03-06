const Course = require('../models/Course');

class CartController {
    async cart ( req, res, next) {
        const cart = req.session.cart || [];
        let total = 0;
        cart.forEach(element => {
            total += element.price * element.quality;
        });
        res.render('cart',{cart:cart,total:total});
    }
    async addCart(req,res,next){
        const id = req.params.id;
        const product = await Course.findById(id);
        if(!product){
            return res.redirect('/');
        }
        const cart = req.session.cart || [];
        
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
                price: Number( product.total.replace(',','').replace('.','').replace('.','').replace('.','')),
                quality:1,
                description:product.detail
            })
            req.session.cart = cart;
        }
        req.flash('message', ' Thêm sản phẩm thành công vào giỏ hàng !!!');
        return res.redirect(`/detail/${product.name_content}`)
    }

    async removeCart(req,res){}
}

module.exports = new CartController;