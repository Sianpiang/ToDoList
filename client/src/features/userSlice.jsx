import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"user",
    initialState:{username:null,token:null},
    reducers:{
        userInfo:(state,action)=>{
            state.username=action.payload.username
            state.token=action.payload.token
        },
        logOut:(state)=>{
            state.username=null
            state.token=null
        }
    }   
})


export const getUsername = (state)=>state.user.username;
export const getToken = (state)=>state.user.token;

export const {userInfo,logOut}=userSlice.actions

export default userSlice.reducer