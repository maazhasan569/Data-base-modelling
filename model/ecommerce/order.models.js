import mongoose from 'mongoose'

const orderItemSchema = mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId, // ASSIGN 24-DIGIT ID
        ref: "Product"
    },
    quantity: {
        type: Number,
        required: true,
        default: 0,
    },
    
}, { timestamps: true })


const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",// FETCH USER DATA
        required: true
    },

    itemsdetails: [
        orderItemSchema
    ],
    price : {
     type : Number, 
     default : 0,
     
    },
    address : {
        type : String,
        required : true,
    },
    status : {
        type : String,
        enum : ["PENDING" , "CANCELLED" , "DELIVERED"],
        default : "PENDING",
    }

}, { timestamps: true })

export const Order = mongoose.model('Order', orderSchema)