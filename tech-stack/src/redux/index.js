import { configureStore } from "@reduxjs/toolkit";
import LoginSlice from "./LoginSlice";

const Store = configureStore({
    reducer:{
        login:LoginSlice
    }
});
export default Store;