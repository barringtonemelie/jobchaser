import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    value: [],
    job: [],
}

const formSlice = createSlice({
    name: "formData",
    initialState,
    reducers: {
        setFormData: (state, action) => {
            state.value = action.payload; 
            console.log("I slicen: ", state.value); 
        },
        setAppliedJob: (state, action) => {
            state.value = action.payload; 
            console.log("Applied job: ", state.value); 
        }
    }
})

export const { setFormData } = formSlice.actions;
export const { setAppliedJob } = formSlice.actions;
export default formSlice.reducer;