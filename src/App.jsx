import * as React from 'react'
import { useState } from 'react'
import { JobItem, SearchBar } from './components/index.jsx';
import { useDispatch, useSelector } from "react-redux"
import store from "./store/index"
import { setJobs } from "./store/slices/dataSlice"


function App() {

  const dispatch = useDispatch()
  const [showFilters, setShowFilters] = useState(false);

  React.useEffect(() => {
    fetch("./src/data/data.json")
      .then((res) => res.json())
      .then((data) => {
        dispatch(setJobs(data))
      })
  }, [])


  //Ifall man klickar utanför dropdown menyn så stängs den 
  function closeDropdown(event) {
    if (event.target.className !== "dropdown-menu show" && event.target.id !== "filterBtn") { 
        setShowFilters(false); 
    }
    // else {
    //   console.log(event.target.className);
    // }
  }

  const jobs = useSelector((state) => state.data.searchedJobs); 
  // console.log(useSelector((state) => state.data.currentSearch)); 
  

  return (

    <div className='mt-5' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} onClick={(e) => closeDropdown(e)}>
      <div style={{ width: '65%' }}>
        <SearchBar showFilters={showFilters} setShowFilters={(setFilter) => setShowFilters(setFilter)}/>
        <ul style={{paddingLeft: '0', marginTop: '30px'}}>
          {jobs.length > 0 ? jobs.map((job) => <JobItem data={job} key={job.id} className="mt-3" />) : <h2>Nothing matched your search.</h2>}
        </ul>
      </div>
    </div>
  )
}

export default App

/* 


*/

/*
Frågor till Sandra: 
- Vad ska vi satsa på för att nå VG? Bolla idéerna vi hade 
    - Kunna lägga till jobb (med formulär)
    - Hämta in jobb via API
    - Lägga till Firebase 
    - Ha ett formulär för användaren att kunna ansöka till jobbet (React Hook Form, React router, validera med t.ex. yup)
    - Lägga till användare i Firebase eller i en dataslice 

- Tips för sökningen (kunna söka med fler parametrar)
- Är vår kod hittills på VG-nivå?

*/