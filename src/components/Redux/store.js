// const { configureStore } = require("@reduxjs/toolkit");
import { configureStore } from "@reduxjs/toolkit";
import product from "./features/productSlice";
export const store =configureStore({
    reducer:{
     products:product
    }
})