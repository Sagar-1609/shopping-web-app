import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import Scroller from "../Components/Scroller";
import ProductCards from "../Components/ProductCard";
import Footer from "../Components/Footer";
import axios from "axios";
import ProductCard from "../Components/ProductCard";

function Product() {
  const [FirstBlock, setFirstBlock] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:7000/Shop/getproduct?catagory=SMARTWATCH")
      .then((response) => {
        setFirstBlock(response.data);
      })
      .catch((error) => {
        console.error("error in fetching products", error);
      });
  }, []);
  return (
    <>
      <Navbar />
      {/* <div className='text-5xl'>hello</div> */}
      <div className="conatiner   w-full h-10 flex justify-center items-center gap-4">
        <div className="text-3xl"> sales starts </div>
        <span className="countdown font-mono text-3xl ">
          <span style={{ "--value": 10 }}></span>h
          <span style={{ "--value": 24 }}></span>m
          <span style={{ "--value": 48 }}></span>s
        </span>
      </div>
      <br />
      <hr />

      <Scroller />
      <h1 className="text-5xl text-black text-center">Gym wear</h1>

      <div className="flex flex-wrap gap-3 items-center justify-center mt-8">
        {FirstBlock.map((product) => (
          <ProductCard
          key={product._id}
          Image={product.Image}
          ProductName={product.ProductName}
          Description={product.Description}
          Price={product.Price}
          ProductId = {product._id}
        />
        ))}
      </div>
      <hr />
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">New album is released!</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Listen</button>
          </div>
        </div>
      </div>
      <br />
      <h1 className="text-5xl text-black text-center">smart watch</h1>
      <ProductCards />
      <hr />
      <Footer />
    </>
  );
}

export default Product;
