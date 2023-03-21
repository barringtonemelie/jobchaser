import { configureStore } from "@reduxjs/toolkit"
import displayJobsReducer from "./slices/dataSlice"

const store = configureStore({

    reducer: {
        data: displayJobsReducer,
    },

})

export default store