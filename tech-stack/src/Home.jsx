import React, { useContext, useEffect, useState } from "react";
import image from "../src/images/wallhaven-96rxlw_1920x1080.png";
import Navbar from "./Navbar";
import logo from "../src/images/logo1.jpg";
import logo2 from "../src/images/logo2.png";
import HomeCard from "./Components/Cards/HomeCard";
import ProductCard from "./Components/ProductCard";
import banner2 from "./images/banner2.png";
import Footer from "./Components/Footer";
import Image from "../src/images/ImageBanner1.jpg";
import Image2 from "../src/images/Imagebanner2.jpg";
import axios from "axios";

function Home() {
  const card1 = {
    Title: "get 20% offon Each product",
    info: "Lorem ipsum dolor sit a",
    image: Image,
  };

  const card2 = {
    Title: "GET UPTO 50% OFF..",
    info: "lorem ",
    image: Image2,
  };

  const card3 = {
    Title: "GET UPTO 50% OFF..",
    info: "lorem ",
  };

  const [products, setproducts] = useState([]);
  console.log("products are", products);

  useEffect(() => {
    axios
      .get("http://localhost:7000/Shop/get")
      .then((response) => {
        setproducts(response.data);
      })
      .catch((error) => {
        console.error("error in fetching products", error);
      });
  }, []);





  
 
  return (
    <>
      <div className="w-full h-auto relative flex md:flex-row">
        <img
          src={image}
          className="w-full h-96  flex-wrap fixed object-cover"
        />

        <div className=" w-full  h-auto inset-0 absolute  top-0  flex-col">
          <Navbar />
        </div>

        <div className="card-body text-3xl text-white sm:text-4xl w-auto  absolute top-24 left-6 flex-col flex-wrap ">
          <h2 className="">Card title!</h2>
          <p className="text-lg">
            If a dog chews shoes whose shoes does he choose?
          </p>
          <div className="card-actions justify-start">
            <button className="btn btn-primary w-auto">Buy Now</button>
          </div>
        </div>
        <img
          src={banner2}
          className="w-full h-96 mt-96 flex-wrap fixed object-cover"
        />
      </div>
      <div className="absolute top-80 left-3  w-full bg-white flex-wrap flex-col">
        <h1 className="text-3xl  w-full  bg-white    text-center sm:h-auto sm:text-6xl">
          Top Brand
        </h1>
        <marquee direction="right ">
          {" "}
          <div className="flex gap-2 items-center">
            <img src={logo} alt="image" className="h-28 w-60 object-contain" />
            <img
              src={logo2}
              alt="image"
              className="h-28 w-60 object-contain sm:h-16 "
            />
            <img src="#" alt="image" />
          </div>
        </marquee>
        <div className="flex flex-wrap gap-6 items-center justify-center">
          <HomeCard data={card1} />
          <HomeCard data={card2} />
          <HomeCard data={card3} />
        </div>
        <h1 className="text-4xl  w-full  bg-white    text-center sm:h-auto mt-9">
          NEW Arrival
        </h1>

        <div className="flex flex-wrap gap-3 items-center justify-center mt-8">

          {products.map((product) => (
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

        <div className="hero min-h-auto mt-5 bg-transparent absolute  ">
          <div className="hero-overlay  bg-opacity-60 bg-transparent "></div>
          <div className="hero-content text-start text-neutral-content flex items-start">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Branding</h1>
              <p className="mb-5 text-xl">
                Enhnace your dressing and level up your fashion
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>

        <div className=" w-full  h-full  mt-64 absolute ">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Home;
