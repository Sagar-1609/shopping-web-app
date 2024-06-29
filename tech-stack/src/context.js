import React from "react";
import { useState } from "react";
import { createContext } from "react";

 export const contextCart = createContext();
const Context = ({ children }) => {
  const [cart, setcart] = useState([]);
  return (
    <contextCart.Provider value={{ cart, setcart }}>
      {children}
    </contextCart.Provider>
  );
};

export default Context;
