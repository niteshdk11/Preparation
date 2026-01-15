import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const productSlice  = createSlice({

    name:"product",
    initialState:{
        items:[]
    } ,
    reducers:{
        getProduct:((state , actions)=>{
            state.items = actions.payload ;
        }) 
        
    }
})
export const {getProduct} = productSlice.actions;
export default productSlice.reducer;