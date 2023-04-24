const Course = require('../models/Course');
const Order = require('../models/Order');


class AdminDetailOrderController {
    async adminDetailOrder ( req, res, next) {
        console.log(req.body)
        const order = await Order.findById(req.params.id).lean();
        console.log('order',order);
        return res.render('admin/detail-order',{order:order, layout:'admin'});
    }
}

module.exports = new AdminDetailOrderController;