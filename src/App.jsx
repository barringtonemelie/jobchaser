import * as React from 'react'
import { useState } from 'react'
import { JobItem, SearchBar, APITesting, DisplayTag } from './components/index.jsx';
import { useDispatch, useSelector } from "react-redux"
import store from "./store/index"
import { setJobs } from "./store/slices/dataSlice"
import { current } from '@reduxjs/toolkit';


function App() {

  const dispatch = useDispatch()
  const [showFilters, setShowFilters] = useState(false);
  const [currentTag, setCurrentTag] = useState(""); 

  React.useEffect(() => {
    
            fetch(
              `https://links.api.jobtechdev.se/joblinks?country=i46j_HmG_v64${currentTag}&offset=0&limit=100`
            )
              .then((res) => res.json())
              .then((data) => {
                dispatch(setJobs(data.hits));
                // console.log(data.hits);
                // console.log(data.hits[4].headline)
                // console.log(data.hits[4].brief)
                // console.log(data.hits[4].occupation_group.label)
                // console.log(data.hits[4].occupation_field.label)
                // console.log(data.hits[4].employer.name)
                // console.log(data.hits[4].workplace_addresses[0].municipality)
                // console.log(data.hits[4].workplace_addresses[0].region)
                // console.log(data.hits[4].workplace_addresses[0].country)
                // console.log(data.hits[4].publication_date)
                // console.log(data.hits[4].source_links[0].label)
                // console.log(data.hits[4].source_links[0].url)
              });
  }, [currentTag])


  //Ifall man klickar utanför dropdown menyn så stängs den 
  function closeDropdown(event) {
    if (event.target.nodeName === "svg") {
      setShowFilters(!showFilters); 
    }
    else if (event.target.className !== "dropdown-menu show" && event.target.id !== "filterBtn") { 
        setShowFilters(false); 
        console.log("setShowFilters blir false"); 
        console.log(event.target.nodeName);
    }
  }

  const jobs = useSelector((state) => state.data.searchedJobs); 
  

  return (
    <div
      className="mt-5"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={(e) => closeDropdown(e)}
    >
      <div style={{ width: "65%" }}>
        <SearchBar
          showFilters={showFilters}
          setShowFilters={(setFilter) => setShowFilters(setFilter)}
          currentTag={currentTag}
          setCurrentTag={(currentTag) => setCurrentTag(currentTag)}
        />
        <DisplayTag tag={currentTag}/>
        <p>Number of jobs: {jobs.length}</p>
        <ul style={{ paddingLeft: "0", marginTop: "30px" }}>
          {jobs.length > 0 ? (
            jobs.map((job) => (
              <JobItem data={job} key={job.id} className="mt-3" />
            ))
          ) : (
            <h2>Nothing matched your search.</h2>
          )}
        </ul>
        <APITesting />
      </div>
    </div>
  );
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