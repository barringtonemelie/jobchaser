import { configureStore } from "@reduxjs/toolkit"
import displayJobsReducer from "./slices/dataSlice"
import formDataReducer from "./slices/formData"
import appliedJobReducer from "./slices/appliedJobData"

const store = configureStore({

    reducer: {
        data: displayJobsReducer,
        formData: formDataReducer,
        appliedJob: appliedJobReducer,
    },

})

export default store