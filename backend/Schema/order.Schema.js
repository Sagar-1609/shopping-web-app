const { Schema } = require("mongoose");
const mongooes  = require("mongoose");

const orderSchema = new mongooes.Schema({
    name :{
        type:String
    },
    ShippingAddress :{
        type:String,
        require:true
    },
    pincode :{
        type:Number,
        require: true
    },
    phonenumber:{
        type:Number,
        require: true
    },
    ProductName:{
        type:String,
        require: true
    },
    price :{
        type:Number,

    }

});

const order  =  mongooes.model("order",orderSchema);

module.exports = order;
