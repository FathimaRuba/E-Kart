import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';

const wishSlice = createSlice({
    name:'wishlist',
    initialState:{
        items:[]
    },
    reducers:{
        addToWishlist(state,action){
            const existing = state.items.find(item=>item.id == action.payload.id)
            if(existing){
                toast.warning("Product Already Added")
            }
            else{
                state.items.push(action.payload)
                toast.success('Item Added to Wishlist');
            }
           
            
        },
        removeFromWishlist(state,action){
            state.items = state.items.filter(items=>items.id != action.payload)
        }
    }
})

export default wishSlice.reducer
export const {addToWishlist,removeFromWishlist} = wishSlice.actions