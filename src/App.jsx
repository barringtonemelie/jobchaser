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
  const [offset, setOffset] = useState(0);
  const [hits, setHits] = useState(0);

  React.useEffect(() => {

    fetch(
      `https://links.api.jobtechdev.se/joblinks?country=i46j_HmG_v64${currentTag}&offset=${offset}&limit=100`
    )
      .then((res) => res.json())
      .then((data) => {
        dispatch(setJobs(data.hits));
        setHits(data.total.value);
      });
  }, [currentTag, offset])

  /*  */
  const nextPage = () => {

    if (offset === Math.round(hits / 100) * 100) {
      return
    }
    setOffset((prev) => {
      console.log(prev);
      return prev += 100
    })
    console.log('Next Page.')

    // kalla på fetch med värdet på offset
  }
  const prevPage = () => {
    if (offset == 0) {
      return
    }
    setOffset((prev) => (prev -= 100));
    console.log('Previous Page.')

    // kalla på fetch med värdet på offset
  }
  /*  */

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

  let pageCount;


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
        <DisplayTag tag={currentTag} />
        {/* <p>
          Searching in {jobs.length} of {hits} hits
        </p> */}
        <p>
          Available jobs: {hits}
        </p>
        <p className='d-flex justify-content-center fs-1'>
          Page {offset / 100 + 1}
        </p>
        {/* Sida */}
        <div className="d-flex flex-row justify-content-between">
          <button className='btn btn-primary' aria-label="Previous Page" onClick={prevPage}>Page {offset / 100 + 1}</button>
          <p>
            Showing {jobs.length} jobs on page {offset / 100 + 1}
          </p>
          {/* <p>
            {jobs.length}/{hits}
          </p> */}
          <button className='btn btn-primary' aria-label="Next Page" onClick={nextPage}>Page {offset / 100 + 2}</button>
        </div>
        {/* Sida */}
        <ul style={{ paddingLeft: "0", marginTop: "30px" }}>
          {jobs.length > 0 ? (
            jobs.map((job) => (
              <JobItem data={job} key={job.id} className="mt-3" />
            ))
          ) : (
            <h2>Nothing matched your search.</h2>
          )}
        </ul>
        {/* Sida */}
        <div className="d-flex flex-row justify-content-between">
          <button className='btn btn-primary' onClick={prevPage}>Page {offset / 100 + 1}</button>
          <p>
            Showing {jobs.length} jobs on page {offset / 100 + 1}
          </p>
          {/* <p>
            {jobs.length}/{hits}
          </p> */}
          <button className='btn btn-primary' onClick={nextPage}>Page {offset / 100 + 2}</button>
        </div>
        {/* Sida */}
        {/* <APITesting /> */}
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