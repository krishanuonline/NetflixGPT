import { configureStore } from "@reduxjs/toolkit";

import userResucer from "./userSlice";
import moviesReducer from "./moviesSlice";


const appStore = configureStore({
    reducer:{
        user: userResucer,
        movies: moviesReducer,
    },
})

export default appStore;