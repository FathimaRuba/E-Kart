import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { act } from "react";

export const fetchProductThunk = createAsyncThunk('products/fetchProductThunk',async()=>{
    const pro = await axios.get('https://dummyjson.com/products')
    console.log(pro.data);
    localStorage.setItem('products',JSON.stringify(pro.data))
    return pro.data.products
})

const productSlice = createSlice({
    name:'products',
    initialState:{
        products:[],
        loading:false,
        error : '',
        currentPage:1,
        productsPerPage:10
    },
    reducers:{
        nextPage(state){
            state.currentPage++
        },
        prevPage(state){
            state.currentPage--
        },
        searchProduct(state,action){
            if(action.payload){
                state.products=state.products.filter(item=>item.title.toLowerCase().includes(action.payload.toLowerCase()))
            }
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchProductThunk.pending,(state)=>{
            state.loading = true
        })
        builder.addCase(fetchProductThunk.fulfilled,(state,action)=>{
            state.loading = false
            state.products = action.payload
        })
        builder.addCase(fetchProductThunk.rejected,(state)=>{
            state.loading = false
            state.products = []
            state.error = "Something Went Wrong"
        })
    }
})

export default productSlice.reducer
export const { nextPage,prevPage,searchProduct } = productSlice.actions
