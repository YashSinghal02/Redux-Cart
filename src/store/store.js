import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "../counterSlice/counterSlice.js"
import cartSlice from "../counterSlice/cartSlice.js"



export const mystore= configureStore({
reducer:{
    counter:counterReducer,
    cart:cartSlice,
},
});