import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import commentUser from "./commentUser";


const store=configureStore({
    reducer:{
      userSlice,
      commentUser,
      
    }
})

export default store;