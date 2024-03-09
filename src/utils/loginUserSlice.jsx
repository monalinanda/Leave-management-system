import { createSlice } from "@reduxjs/toolkit";

const loginUserSlice = createSlice({
    name:"loginUser",
    initialState:{
        uers : null , 
        
    },
    reducers: {
        addLoginUsers: (state, action) => {
          state.uers = action.payload;
        },
    }
});
export const {addLoginUsers} = loginUserSlice.actions;

export default loginUserSlice.reducer;