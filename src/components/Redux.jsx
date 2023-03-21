import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import store from "../store/index"
import { setJobs } from "../store/slices/dataSlice"


function Render() {

    //Vi lyckas inte komma åt state i komponenten
    const jobs = useSelector((state) => state.value)
    const dispatch = useDispatch()

    console.log("hela alltet", store.getState())


    const handleSubmit = () => {
        fetch("./src/data/data.json")
            .then((res) => res.json())
            .then((data) => {
                dispatch(setJobs(data))
            })

        // dispatch(displayJobs())
        console.log("Jobs: ", jobs)
    }


    return (
        <>
            <h1>JOBLIST</h1>
            <button onClick={handleSubmit}>submit</button>
        </>
    )
}

export default Render