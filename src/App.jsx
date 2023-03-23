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
      })
  }, [])

  const jobs = useSelector((state) => state.data.searchedJobs); 
  console.log(useSelector((state) => state.data.currentSearch)); 

  return (

    <div className='mt-5' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ width: '65%' }}>
        <SearchBar />
        <ul style={{paddingLeft: '0', marginTop: '30px'}}>
          {jobs.map((job) => <JobItem data={job} key={job.id} className="mt-3" />)}
        </ul>
      </div>
    </div>
  )
}

export default App
