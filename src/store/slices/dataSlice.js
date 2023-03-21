import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    value: []
}

const displaySlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        displayJobs: (state, action) => {
            fetch("./src/data/data.json")
                .then((res) => res.json())
                .then((data) => {
                    state = data
                    console.log(state)
                })
                .catch((err) => {
                    console.error(err);
                })

            // async function getData() {
            //     const response = await fetch("./src/data/data.json")
            //         .then((res) => {
            //             return res.json()
            //             // console.log("res.json", res.json())
            //             // state.value = res.json()[1];
            //             // console.log(state)
            //         })
            //         .catch((err) => {
            //             console.error(err);
            //         })
            //     state = response;
            //     // console.log(response)
            //     console.log("State i reducern: ", state);
            // }
            // getData();

            // .then((data) => {
            //     state.value = data
            //     console.log(state)
            // })
        }
        // addJob: (state, action) => {

        // }
        // removeJob: (state, action) => {

        // }
    }
})

export const { displayJobs } = displaySlice.actions
export default displaySlice.reducer