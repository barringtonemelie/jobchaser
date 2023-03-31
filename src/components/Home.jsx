import * as React from 'react'
import { useState } from 'react'
import { JobItem, SearchBar, DisplayTag } from './index.jsx';
import { useDispatch, useSelector } from "react-redux"
import { setJobs } from "../store/slices/dataSlice"
import { BsChevronDoubleLeft, BsChevronDoubleRight} from 'react-icons/bs';


function Home() {

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

  const nextPage = () => {

    if (offset === Math.floor(hits / 100) * 100) {
      return
    }
    setOffset((prev) => {
      return prev += 100
    })
  }
  const prevPage = () => {
    if (offset == 0) {
      return
    }
    setOffset((prev) => (prev -= 100));
  }

  //Ifall man klickar utanför dropdown menyn så stängs den 
  function closeDropdown(event) {
    if (event.target.parentNode.id === "filterBtn") {
      setShowFilters(!showFilters); 
    }
    else if (event.target.className !== "dropdown-menu show" && event.target.id !== "filterBtn") {
      setShowFilters(false);
    }
  }

  const jobs = useSelector((state) => state.data.searchedJobs);
  

  return (
    <div
      className="mt-5 mb-3"
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
          setCurrentTag={(currentTag) => {
            setOffset(0)
            setCurrentTag(currentTag)
          }}
          setOffset={(currentOffset) => setOffset(currentOffset)}
        />
        {/* <SearchBar
          showFilters={showFilters}
          setShowFilters={(setFilter) => setShowFilters(setFilter)}
          currentTag={currentTag}
          setCurrentTag={(currentTag) => setCurrentTag(currentTag)}
          setOffset={(currentOffset) => setOffset(currentOffset)}
        /> */}
        <DisplayTag tag={currentTag} />
        <p>
          Available jobs: {hits}
        </p>
        <p className='d-flex justify-content-center fs-1'>
          Page {offset / 100 + 1}
        </p>
        {/* Sida */}
        <div className="d-flex flex-row justify-content-between">
          <button id="prevPageBtnOne" className='btn btn-primary' aria-label="Previous Page" onClick={prevPage}><BsChevronDoubleLeft /></button>
          <p>
            Showing {jobs.length} jobs on page {offset / 100 + 1}
          </p>
          <button id="prevPageBtnTwo" className='btn btn-primary' aria-label="Next Page" onClick={nextPage}><BsChevronDoubleRight /></button>
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
          <button id="prevPageBtnTwo" className='btn btn-primary' onClick={prevPage}> <BsChevronDoubleLeft /> </button>
          <p>
            Showing {jobs.length} jobs on page {offset / 100 + 1}
          </p>
          <button id="nextPageBtnTwo" className='btn btn-primary' onClick={nextPage}> <BsChevronDoubleRight /> </button>
        </div>
      </div>
    </div>
  );
}

export default Home