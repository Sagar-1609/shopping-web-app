
const mongoose = require("mongoose");

const ProdctSchema = new mongoose.Schema({
    ProductName:{
        require: true,
        type: String,

    },
    Description:{
        require:true,
        type:String,

    },
    Price:{
        require:true,
        type:Number,
    },
    Image:{
      
        type:String,
    },
    catagory :{
        type:String
    }
    


});

const Product = mongoose.model("Product",ProdctSchema);


module.exports= Product;