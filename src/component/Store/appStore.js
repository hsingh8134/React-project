import {configureStore} from "@reduxjs/toolkit";
import themeReducer from "./themeSlice.js"

const appStore=configureStore({
    reducer:{
        theme:themeReducer,
    }
});

export default appStore;