const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Order = new Schema({
    name: { type: String},
    address: { type: String},
    phone: { type: String},
    email: { type: String},
    paymentMethod: { type: String},
    products: { type: String},
    total: { type: String}
  }, {
    timestamps: true,
  });


module.exports = mongoose.model('Order', Order);

