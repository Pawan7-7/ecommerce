import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState={
    loading:false,
    products:[],
    count:0,
    authprops:[],
}
export const getProducts=createAsyncThunk("posts/getProducts", async()=>{
 const response = await axios.get('https://fakestoreapi.com/products')
 return response.data
})
const productSlice =createSlice({
    name:"products",
    initialState,
    reducers:{
        add:(state)=>{
        state.count=state.count+1
        }, 
        sub:(state)=>{
            state.count=state.count-1
            },
        auth:(state,action)=>{
            state.authprops.push(action.payload)

        }

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
export const {add,sub,auth}=productSlice.actions
export default productSlice.reducer