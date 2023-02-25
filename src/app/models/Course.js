const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({
    name_content: { type: String},
    total: { type: String},
    img: { type: String},
    type: { type: String},
    detail: { type: String},
  }, {
    timestamps: true,
  });


module.exports = mongoose.model('Course', Course);

