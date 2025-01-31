import {createSlice} from "@reduxjs/toolkit";

const themeSlice=createSlice({
    name:'theme',
    initialState:{
        lightMode:false
    },
    reducers:{
        changeTheme:(state,action)=>{
            state.lightMode=!state.lightMode;
        }
    }
});

const {changeTheme}=themeSlice.actions;

export default  changeTheme;