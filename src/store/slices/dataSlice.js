import { createSlice } from "@reduxjs/toolkit"

const keys = ["description", "company", "tags"]

const initialState = {
    value: [],
    searchedJobs: [],
    currentSearch: ""
}

const jobSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        setJobs: (state, action) => {
            state.value = action.payload;
        },
        setSearchInput: (state, action) => {
            state.currentSearch = action.payload;
            // console.log(state.currentSearch); 
        },
        filterSearch: (state, action) => {
            
            state.searchedJobs = state.value.filter(
                (job) => {
                //   console.log(keys.some(key => job[key].includes(state.currentSearch)))
                  if (keys.some(key => job[key].toString().toLowerCase().includes(state.currentSearch))) {
                    // console.log(job);
                    return job; 
                  }
                }
                
            )

            // console.log("State", state.value); 
        }
    }
})

export const { setJobs } = jobSlice.actions
export const { setSearchInput } = jobSlice.actions
export const { filterSearch } = jobSlice.actions
export default jobSlice.reducer