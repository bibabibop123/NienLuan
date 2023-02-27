const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName: { type: String},
    lastName: { type: String},
    username: { type: String , unique: true},
    password: { type: String},
    email: { type: String},
    phoneNumber: { type: String},
    address: { type: String},
  }, {
    timestamps: true,
  });


module.exports = mongoose.model('users', UserSchema);

