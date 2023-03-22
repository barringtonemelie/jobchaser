import { BsSearch, BsFilter } from 'react-icons/bs';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { JobItem } from './index';

function SearchBar() {
  const jobs = useSelector((state) => state.data.value); 
  const [query, setQuery] = useState();
  const keys = ["description", "company", "tags"]

  const search = (jobs) => {
    return jobs.filter(
      (item) => {
        console.log(keys.some(key => item[key].includes(query)))
        if (keys.some(key => item[key].includes(query))) {
          console.log(item);
          return <JobItem data={item} key={item.id} /> // det här borde inte funka men retunera item istället o ta bort kommentar i rad 32 o kommentera rad 31
        }
      
      }
        )
  }
  // console.log(jobs);
  return (

    <div className="input-group mb-5 mt-5">
          <div className="input-group-prepend">
            <button onClick={() => {
              console.log("Searched " + query);
              search(jobs)
              // <JobItem data={search(jobs)} key={item.id} />
            }} className="btn btn-primary h-100" type="button" style={{backgroundColor: '#0d6efd'}} >
              <BsSearch />
            </button>
          </div>
          <input type="text" className="form-control rounded-3 border-success" placeholder="Search" aria-label="Search" style={{ marginRight: '10px', marginLeft: '10px' }} onChange={(e) => setQuery(e.target.value)} />
          <div className="input-group-append">
            <button className="btn btn-outline-secondary h-100" type="button">
              <BsFilter />
            </button>
          </div>
        </div>

  );
}

export default SearchBar;
