const { PaymentStatus } = require('../../config/enum.config');
const Order = require('../models/Order');
class AdminCancelController {
    async adminCancel ( req, res, next) {
        const orders = await Order.find({status:PaymentStatus.da_huy}).lean();
        return res.render('admin/order-cancel',{orders:orders,layout:'admin'});
    }
}

module.exports = new AdminCancelController;