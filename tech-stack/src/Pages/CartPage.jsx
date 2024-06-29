import React, { useContext, useEffect, useState } from "react";
import { contextCart } from "../context";
import ProductCard from "../Components/ProductCard";
import Navbar from "../Navbar";
import { FaBagShopping } from "react-icons/fa6";
import axios from "axios";
import { BsCashCoin } from "react-icons/bs";
import { CiBank } from "react-icons/ci";

function CartPage() {
  const [isname, setname] = useState("");
  const [isaddress, setaddress] = useState("");
  const [ispin, setpin] = useState("");

  console.log("name is :", isname);
  console.log("address is :", isaddress);
  console.log("pin is :", ispin);

  const { cart } = useContext(contextCart);

  const OrderItem = async () => {
    try {
      const response = await axios.post("", {
        productname: isname,
        address: isaddress,
        pinode: ispin,
        productname: { ...cart.productname },
        Price: { ...cart.Price },
      });
      console.log("Response:", response);
    } catch (error) {
      console.error("error in order", error.message);
    }
  };

  console.log("cart is :", ...cart);

  return (
    <>
      <Navbar />

      <div className="h-screen w-full flex  justify-between">
        <br />

        <div className="w-3/5 h-screen ">
          <h1 className="text-3xl text-black  text-center flex justify-center items-center gap-4">
            {" "}
            <span>
              <FaBagShopping />
            </span>
            My cart
          </h1>
          <br />
          <div className="divider divider-neutral">best choice</div>
          {!cart ? (
            <div className="mx-auto h-screen flex flex-wrap justify-center gap-4 text-black text-6xl">
              add your products{" "}
            </div>
          ) : (
            <div className="mx-auto h-screen flex flex-wrap justify-center gap-4">
              {cart.map((product) => (
                <ProductCard
                  key={product.ProductId}
                  Image={product.Image}
                  ProductName={product.ProductName}
                  Description={product.Description}
                  Price={product.Price}
                  ProductId={product.ProductId}
                />
              ))}
            </div>
          )}
        </div>
        <div className="w-1/3 h-screen bg-white text-gray-800  flex-col   items-center justify-center">
          <h2 className="text-2xl text-black ml-9">My order</h2>
          <hr />

          <label className="input input-bordered flex  w-3/4 items-center  justify-center gap-2 mt-5">
            <input
              type="text"
              className="grow"
              placeholder="name "
              onChange={(e) => setname(e.currentTarget.value)}
            />
          </label>
          <label className="input input-bordered flex w-3/4 items-center gap-4 mt-5 ">
            <input
              type="text"
              className="grow"
              placeholder="shipping address"
              onChange={(e) => setaddress(e.currentTarget.value)}
            />
          </label>
          <label className="input input-bordered w-3/4 flex items-center gap-4 mt-5">
            <input
              type="text"
              className="grow"
              placeholder="pincode"
              onChange={(e) => setpin(e.currentTarget.value)}
            />
          </label>
          <label className="input input-bordered w-3/4 flex items-center gap-5 mt-5">
            <input type="text" className="grow" placeholder="copy code" />
          </label>

          <div className="text-xl text-black mt-5 ">
            <span>total product :{cart.length}</span>
          </div>

          <button
            className="btn btn-outline w-full text-center mt-5"
            onClick={() => document.getElementById("orderbox").showModal()}
          >
            {" "}
            buy now
          </button>
          <dialog id="orderbox" className="modal">
            <div className="modal-box h-screen w-[80%]">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <span className="text-xl ">Payment method</span>
              <div className="flex gap-3 items-center mt-4 ">
                <input
                  type="checkbox"
                  id="check1"
                  className="checkbox flex items-center"
                />
                <BsCashCoin className="text-2xl text-green-700" />
                <span>cash on delivery</span>
              </div>

              <div className="flex gap-3 items-center mt-4 ">
              <input
                type="checkbox"
                id="check2"
                className="checkbox flex items-center"
              />
              <CiBank className="text-2xl" />
              <span>Net banking </span>
            </div>
            </div>
         
          </dialog>
        </div>
      </div>
    </>
  );
}

export default CartPage;
