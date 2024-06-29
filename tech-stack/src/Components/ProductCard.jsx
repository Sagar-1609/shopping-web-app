import React, { useContext, useEffect, useState } from "react";
import { contextCart } from "../context";
import { FaShoppingCart } from "react-icons/fa";

function ProductCard({ ProductId, Image, ProductName, Description, Price }) {
  const { cart, setcart } = useContext(contextCart);
  console.log(cart);

  
  const isInCart = cart.find((item) => item.ProductId === ProductId);
 

  const handleRemovebutton = () => {
    setcart((prevCart) =>
      prevCart.filter((item) => item.ProductId !== ProductId)
    );
  };


 
  const handleAddToCart = () => {
    if (!isInCart) {
      setcart([...cart, { ProductId, Image, ProductName, Description, Price }]);
    }
  };

  return (
    <>
      <div className="card card-compact w-96 bg-white-100 shadow-xl text-black">
        <figure>
          <img
            src={Image}
            alt="Loading..."
            className="object-cover w-full h-80 "
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{ProductName}</h2>
          <p>{Description}</p>
          <p className="text-xl "> Price: {Price}$</p>
          <div className="card-actions  flex justify-center  w-full ">
            {!isInCart?( <button
              className="btn btn-primary w-[80%]"
              onClick={
                handleAddToCart
              }
            >
              {" "}
              <FaShoppingCart className="text-xl" />
              Add to cart
            </button>) : (  <button
            className="btn btn-red w-[80%]"
            onClick={handleRemovebutton}
          >
            {" "}
            remove from cart to cart
          </button>)}
           
            
          </div>
          
        
        </div>
      </div>
    </>
  );
}

export default ProductCard;
