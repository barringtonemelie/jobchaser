import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    value: []
}

const jobSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        setJobs: (state, action) => {
            state.value = action.payload;
        }
        //filterJobs: (state, action) => {
        // }
    }
})

export const { setJobs } = jobSlice.actions
export default jobSlice.reducer