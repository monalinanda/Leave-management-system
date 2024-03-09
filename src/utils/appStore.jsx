import { configureStore } from "@reduxjs/toolkit";
import loginUserReducer from "./loginUserSlice";

const appStore = configureStore({
    reducer:{
        loginUser :  loginUserReducer,
    }
})

export default appStore ; 