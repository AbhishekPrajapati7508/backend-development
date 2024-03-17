import mongoose from "mongoose";

// for individual customer order item eg. cart
const orderItemsSchema = new mongoose.Schema({
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Product'
    },
    quantity:{
        type:Number,
        required:true
    }
})
const orderSchema = new mongoose.Schema({
    orderPrice: {
        type:Number,
        required:true
    },
    customer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Customer',
        required:true
    },
    orderItems:{
        type:[orderItemsSchema]

    },
    address: {
        type:String,
        required:true
    },
    status: {
        type:String,
        enum:['PENDING','CANCELLED','DELIVERED'],
        default:'PENDING'
    }
},
{timestamps:true});


export const Order= mongoose.model('Order', OrderSchema)