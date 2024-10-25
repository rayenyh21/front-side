import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"

 //we will send the data to the server through a path /user/register . and for the post method => we do register for X by axios we send data and res is the data

export const GetProducts = createAsyncThunk("Products", async (data,{rejectedWithValue}) => {
    try{
        const res = await axios.get("/user/getproducts", data)
        return res.data; 
    }
    catch(error){
        rejectedWithValue(error.response.data.msg) // to read the error from the response
    }
}) 


const ProductSlice =createSlice ({
    name :"product",
    initialState : {
        isLoading :false ,  
        error:false ,
        products:[]
    },
    reducers :{
        },
    extraReducers : {
        [GetProducts.pending]: (state)=> {state.isLoading=true},
        [GetProducts.fulfilled]: (state,action )=> {
            state.error=null
           state.products=action.payload.products
           state.isLoading=false
        },

        [GetProducts.rejected]: (state, action)=> {
            state.error=action.payload.error
        },

        

} })





export default ProductSlice.reducer;
//export const {logout}=userSlice.actions

