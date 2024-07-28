import { createSlice } from "@reduxjs/toolkit";


const commentUser= createSlice({
    name:'commentUser',
    initialState:{
        comment:null,
    },
    reducers:{
        addComment:(state,commt)=>{
         state.comment=commt.payload;
        console.log(commt);
        }
    }

});
export const {addComment}=commentUser.actions;
export default commentUser.reducer;