import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState={
    loading:false,
    products:[]
}
export const getProducts=createAsyncThunk("posts/getProducts", async()=>{
 const response = await axios.get('https://fakestoreapi.com/products')
 return response.data
})
const productSlice =createSlice({
    name:"products",
    initialState,
    reducers:{

    },
    extraReducers:{
        [getProducts.pending]:(state)=>{
            state.loading=true
        },
        [getProducts.fulfilled]:(state,{payload})=>{
            state.loading=false
            state.products=payload
        }, [getProducts.rejected]:(state)=>{
            state.loading=false
        }

    }
})
export default productSlice.reducer