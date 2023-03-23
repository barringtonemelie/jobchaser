import { BsSearch, BsFilter } from 'react-icons/bs';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { useSelector } from "react-redux"
import { JobItem } from './index';

function SearchBar() {
  const jobs = useSelector((state) => state.data.value); 
  const [search, setSearch] = useState("");
  const keys = ["description", "company", "tags"]

  const searchFiltering = (jobs) => {
    return jobs.filter(
      (item) => {
        // console.log(keys.some(key => item[key].includes(search)))
        if (keys.some(key => item[key].includes(search))) {
          console.log(item);
          return item 
        }
      
      }
        )
  }
  // console.log(jobs);
  return (

    <div className="input-group mb-5 mt-5">
          <div className="input-group-prepend">
            <button onClick={() => {
              console.log("Searched " + search);
              // console.log(<JobItem data={search(jobs) } key={search(jobs).id} />);
              <JobItem data={searchFiltering(jobs) } key={search.id} />

            //     <JobItem data={search(jobs) } key={index.id} />

            //   {jobs.filter((theJob) => {
            //     return search.toLowerCase() === '' ? theJob : theJob.company.toLowerCase().includes(theJob)
            //   }).map((theJob) => (
            
            //   ))
            // }
              // <JobItem data={search(jobs)} key={item.id} />
            }} className="btn btn-primary h-100" type="button" style={{backgroundColor: '#0d6efd'}} >
              <BsSearch />
            </button>
          </div>
          <input type="search" className="form-control rounded-3 border-success" placeholder="Search" aria-label="Search" style={{ marginRight: '10px', marginLeft: '10px' }} onChange={(e) => setSearch(e.target.value)} />
          <div className="input-group-append">
            <button className="btn btn-outline-secondary h-100" type="button">
              <BsFilter />
            </button>
          </div>
        </div>

  );
}

export default SearchBar;
