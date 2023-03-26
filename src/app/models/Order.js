const mongoose = require('mongoose');
const { PaymentStatus, PaymentMethod } = require('../../config/enum.config');
const Schema = mongoose.Schema;


const Order = new Schema({
    name: { type: String},
    address: { type: String},
    phone: { type: String},
    email: { type: String},
    paymentMethod: { type: String,
    enum: PaymentMethod},
    products: [{ type: Object}],
    total: { type: String},
    user: {type: mongoose.Types.ObjectId, ref: "user"},
    status:{
      type:String,
      enum: PaymentStatus,
      default:function(){
        if(this.paymentMethod == PaymentMethod.code)
        return PaymentStatus.da_dat_hang;
        return PaymentStatus.doi_thanh_toan;
      }
    }
  }, {
    timestamps: true,
  });


module.exports = mongoose.model('Order', Order);

