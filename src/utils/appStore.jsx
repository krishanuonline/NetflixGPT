import { configureStore } from "@reduxjs/toolkit";

import userResucer from "./userSlice";
import moviesReducer from "./moviesSlice";
import gptReducer from "./gptSlice";



const appStore = configureStore({
    reducer:{
        user: userResucer,
        movies: moviesReducer,
        gpt: gptReducer,
    },
})

export default appStore;