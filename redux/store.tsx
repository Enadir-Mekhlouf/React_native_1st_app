import { configureStore } from "@reduxjs/toolkit";
import itemsReducer from "./ItemSlice";

const store = configureStore({
    reducer:{
        items:itemsReducer,
    }
})
export default store