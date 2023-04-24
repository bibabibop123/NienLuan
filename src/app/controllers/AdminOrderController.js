const Course = require('../models/Course');
const Order = require('../models/Order');


class AdminOrderController {
    async adminOrder ( req, res, next) {
        // console.log(res.body)
        const orders = await Order.find().lean();
        // console.log('order',orders);
        return res.render('admin/order',{layout:'admin', orders:orders});
    }
}

module.exports = new AdminOrderController;