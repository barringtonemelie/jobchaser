import { BsSearch, BsFilter } from 'react-icons/bs';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { setSearchInput, filterSearch } from ".././store/slices/dataSlice"
import { JobItem } from './index';

function SearchBar() {
  const jobs = useSelector((state) => state.data.value); 
  const [search, setSearch] = useState();
  const dispatch = useDispatch()
  // const keys = ["description", "company", "tags"]

  // const searchFiltering = (jobs) => {
  //   return jobs.filter(
  //     (item) => {
  //       console.log(keys.some(key => item[key].includes(search)))
  //       if (keys.some(key => item[key].includes(search))) {
  //         console.log(item);
  //         return <JobItem data={item} key={item.id}/>;
  //       }
      
  //     }
  //       )
  // }
  // console.log(jobs);

  function handleChange(value) {
    setSearch(value.toString().toLowerCase());
  }

  return (

    <div className="input-group mb-5 mt-5">
          <div className="input-group-prepend">
            <button onClick={() => {
              console.log("Searched " + search.toString().toLowerCase());
              dispatch(setSearchInput(search));
              dispatch(filterSearch()); 
            }} className="btn btn-primary h-100" type="button" style={{backgroundColor: '#0d6efd'}} >
              <BsSearch />
            </button>
          </div>
          <input type="text" className="form-control rounded-3 border-success" placeholder="Search" aria-label="Search" style={{ marginRight: '10px', marginLeft: '10px' }} onChange={(e) => handleChange(e.target.value)} />
          <div className="input-group-append">
            <button className="btn btn-outline-secondary h-100" type="button">
              <BsFilter />
            </button>
          </div>
        </div>

  );
}

export default SearchBar;
