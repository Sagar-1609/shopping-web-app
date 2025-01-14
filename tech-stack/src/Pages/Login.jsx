import React, { useState } from "react";
import Navbar from "../Navbar"
import { useDispatch, useSelector } from "react-redux";
import { LoginData } from "../redux/LoginSlice";

function Login() {
  const dispatch = useDispatch();
  const[isName,SetName] = useState('');
  console.log("username is",isName);
  const User = useSelector((state)=>state.login);
  console.log("username",User);
  return (
    <>
    <Navbar/>
      <div className="Conatiner mx-auto h-3/4 flex justify-center items-center">
       <div className="w-1/2 flex justify-center h-screen items-center mb-6">
        <div className="w-80 flex-col items-center  justify-center h-1/3 mt-6">
          <h2 className="text-3xl  text-center  ">Login</h2>
          <div className="gap-5 mt-11">
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
              </svg>
              <input type="text" className="grow" placeholder="Username"  value={isName} onChange={(e)=>SetName(e.target.value)}/>
            </label>

            <label className="input input-bordered flex items-center gap-2 mt-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input type="password" className="grow" placeholder="password" />
            </label>
            <button className="btn btn-success btn-sm mt-5 w-80 " onClick={()=>dispatch(LoginData(isName))}>Login </button>
          </div>
          
        </div>
        </div>
      </div>
    </>
  );
}

export default Login;
