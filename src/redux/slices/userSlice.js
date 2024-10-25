import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"

 //we will send the data to the server through a path /user/register . and for the post method => we do register for X by axios we send data and res is the data

export const RegisterUser = createAsyncThunk("Register", async(data,{rejectedWithValue}) => {
    try{
        const res = await axios.post("/user/register", data)
        return res.data; 
    }
    catch(error){
        rejectedWithValue(error.response.data.msg) // to read the error from the response

    }
}) 

export const LoginUser = createAsyncThunk("Login", async(data,{rejectedWithValue}) => {
    try{
        const res = await axios.post("/user/login", data)
        return res.data; 
    }
    catch(error){
        rejectedWithValue(error.response.data.msg) // to read the error from the response

    }
}) 

const userSlice =createSlice ({
    name :"user",
    initialState : {
        isLoading :false ,
        token : localStorage.getItem("token") || null ,     
        error:false ,
        isAuth : Boolean(localStorage.getItem("isAuth"))  || false
    },
    reducers :{
        logout :(state)=> {
            localStorage.removeItem('isAuth')
            state.isAuth =false 
            state.token=null
        }

    },
    extraReducers:{
        [RegisterUser.pending]: (state)=> {state.isLoading=true},
        [RegisterUser.fulfilled]: (state,action )=> {
           state.error=null
           state.token=action.payload.token 
           state.isAuth=true
           localStorage.setItem("token", state.token)
           localStorage.setItem("isAuth",state.isAuth)
        },

        [RegisterUser.rejected]: (state, action)=> {
            state.error=[]
            state.isAuth=false
        },

        [LoginUser.pending]: (state)=> {state.isLoading=true},
        [LoginUser.fulfilled]: (state,action )=> {
           state.error=null
           state.token=action.payload.token 
           state.isAuth=true
           localStorage.setItem("token",state.token)
           localStorage.setItem("isAuth",state.isAuth)


        },

        [LoginUser.rejected]: (state, action)=> {
            state.error= action.payload.error 
            state.isAuth=false
        }

} })





export default userSlice.reducer;
export const {logout}=userSlice.actions

