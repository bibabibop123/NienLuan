const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb+srv://thuhan445566:vtEa52dDY0ubsxVS@shop.fskablk.mongodb.net/shop');
        console.log('ok');
    } catch (error) {
        console.log('failed to connect');
    }
}

module.exports = { connect }