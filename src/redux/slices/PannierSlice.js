import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"




const PanierSlice =createSlice ({
    name :"panier",
    initialState : {
        isLoading :false ,  
        error:false ,
        products:[]
    },
    reducers :{
        addProductPanier : (state,action)=>{
            state.products=[...state.products, action.payload]
        }
          },
    extraReducers : {
             
} 
})



export default PanierSlice.reducer;
export const {addProductPanier}=PanierSlice.actions

