import { configureStore } from "@reduxjs/toolkit";

import userResucer from "./userSlice";


const appStore = configureStore({
    reducer:{
        user: userResucer,
    },
})

export default appStore;