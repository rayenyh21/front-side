import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"

 //we will send the data to the server through a path /user/register . and for the post method => we do register for X by axios we send data and res is the data

export const CreateOrder = createAsyncThunk("PostOrder", async (data,{rejectedWithValue}) => {
    try{
        const res = await axios.post("/user/createorder",data)
        headers:{
            token:localStorage.getItem("token")
        }
        return res.data; 
    }
    catch(error){
        rejectedWithValue(error.response.data.msg) // to read the error from the response

    }
}) 



const OrderSlice =createSlice ({
    name :"order",
    initialState : {
        isLoading :false ,  
        error:false ,
        orders:[]
    },
    reducers :{
        },
    extraReducers : {
        [CreateOrder.pending]: (state)=> {state.isLoading=true},
        [CreateOrder.fulfilled]: (state,action )=> {
           state.error=null
           state.isLoading=false
        },

        [CreateOrder.rejected]: (state, action)=> {
            state.error=action.payload.error
        },

        

} })





export default CreateOrder.reducer;
//export const {logout}=userSlice.actions


