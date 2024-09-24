import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import wishSlice from "./wishSlice";

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        cart:[]
    },
    reducers:{
        addToCart(state,action){
            const existing = state.cart.find(item=>(item.id==action.payload.id))
            if(existing){
                existing.quantity += 1
                state.cart = state.cart.filter(item=>(item.id!=existing.id))
                state.cart.push(existing)
                toast.success('Item Added to Cart')
            }
            else{
                const products = action.payload
                products.quantity = 1
                state.cart.push(products)
                toast.success('Product Added to Cart')
            }           
    },
    removeFromCart(state,action){
        state.cart = state.cart.filter(item=>(item.id!=action.payload))
        toast.success('Product Removed from Cart')
    },
    incrementQuantity(state,action){
        const existing = state.cart.find(item=>(item.id==action.payload))
        existing.quantity++
    },
    decrementQuantity(state,action){
        const existing = state.cart.find(item=>(item.id==action.payload))
        if(existing.quantity == 1){
            state.cart = state.cart.filter(item=>(item.id!=action.payload))
        }
        else{
            existing.quantity--
        }
    },checkoutCart(state){
        state.cart = []
    }
}
})

export default cartSlice.reducer
export const {addToCart,removeFromCart,incrementQuantity,decrementQuantity,checkoutCart} = cartSlice.actions