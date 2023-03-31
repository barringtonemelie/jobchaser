import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    value: [],
    job: [],
}

const appliedJob = createSlice({
    name: "formData",
    initialState,
    reducers: {
        setAppliedJob: (state, action) => {
            state.value = action.payload; 
            console.log("applied job... : ", state.value); 
        }
    }
})

export const { setAppliedJob } = appliedJob.actions;
export default appliedJob.reducer;