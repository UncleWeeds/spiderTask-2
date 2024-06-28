const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    products: [
        {
            product_id: String
        }
    ],
    user: String,
    total_price: Number,
    created_at: {
        type: Date,
        default: Date.now()
    }
});

module.exports =  mongoose.model('order', orderSchema)
