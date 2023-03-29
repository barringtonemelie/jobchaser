import { createSlice } from "@reduxjs/toolkit"

const keys = ["brief", "headline"];
// const keys = ["description", "company", "tags"]

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
            state.searchedJobs = action.payload;
        },
        setSearchInput: (state, action) => {
            state.currentSearch = action.payload;
            // console.log(state.currentSearch); 
        },
        filterSearch: (state, action) => {
            
            state.searchedJobs = state.value.filter(
                (job) => {
                //   console.log(keys.some(key => job[key].includes(state.currentSearch)))
                //   if (keys.some(key => job[keys].toString().toLowerCase().includes(state.currentSearch))) {
                //     // console.log(job);
                //     return job; 
                //   }

                  if (job.brief.toString().toLowerCase().includes(state.currentSearch)) {
                    return job; 
                  }
                  if (job.headline.toString().toLowerCase().includes(state.currentSearch)) {
                    return job; 
                  }
                  if (job.employer.name.toString().toLowerCase().includes(state.currentSearch)) {
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