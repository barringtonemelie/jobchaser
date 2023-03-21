import * as React from 'react'
import { JobItem, SearchBar } from './components/index.jsx';
import { useDispatch, useSelector } from "react-redux"
import store from "./store/index"
import { setJobs } from "./store/slices/dataSlice"

function App() {

  const dispatch = useDispatch()

  React.useEffect(() => {
    fetch("./src/data/data.json")
      .then((res) => res.json())
      .then((data) => {
        dispatch(setJobs(data))
        setJob(store.getState())
      })
  }, [])

  function setJob(state) {
    const jobs = state.data.value;
    console.log("Jobs: ", jobs);
    jobs.map((item) => {
      console.log(item)
    })
  }

  return (

    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ width: '65%' }}>
        <SearchBar />
        <ul>
          {/* {jobs.map((job) => <JobItem data={job} key={job.id} />)} */}
        </ul>
      </div>
    </div>
  )
}

export default App
