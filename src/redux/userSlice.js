import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice({
    name:'userSlice',
    initialState:{
       fullName:null,
       username:null,
       id:null,
        
    },
    reducers:{
        addUser:(state,user)=>{
            state.fullName=user.payload.user.fullName;
            state.username=user.payload.user.username;
            state.id=user.payload.user.id
            console.log(user);
        }
    }
})
export const {addUser}=userSlice.actions;
export default userSlice.reducer;
