import mongoose from 'mongoose'

const orderItemSchema = mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    },
    quantity: {
        type: Number,
        required: true,
        default: 0,
    }
}, { timestamps: true })


const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
        required: true
    },

    itemsdetails: [
        orderItemSchema
    ],
    price : {
     type : Number, 
     default : 0,
    }
}, { timestamps: true })

export const Order = mongoose.model('Order', orderSchema)