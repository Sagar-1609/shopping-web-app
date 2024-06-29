const express = require("express");

const Product_router = express.Router();


const Product = require("../Schema/Product.Schema.js");

Product_router.get("/get", async (req, res) => {
   const Products =   await  Product.find();
   console.log("products are :",Products)
   res.status(200).json(Products)
});

Product_router.post("/Product", async(req,res)=>{
    const PostProduct = await Product.create(req.body);
     res.status(200).json(PostProduct)
});
 Product_router.get("/getproduct",async(req,res)=>{
      const {catagory } = req.query;
  const pipeLine = [];
  const matchStage = {};

  if (catagory) {
   matchStage["catagory"] = catagory.toUpperCase();
  }
 pipeLine.push({$match:matchStage});

 pipeLine.push({
   $project:{
     "ProductName":1,
      "Description":1,
      "Price" :1,
      "Image":1,
      "catagory" :1
   }
 })


 const displayProduct  = await Product.aggregate(pipeLine);
console.log(" data is :",displayProduct)
 res.status(200).json(displayProduct);


 })
Product_router.post("/order",async(req,res)=>{
  
})

module.exports = Product_router;

