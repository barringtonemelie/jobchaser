import { BsSearch, BsFilter } from 'react-icons/bs';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
<<<<<<< HEAD
import { useSelector } from "react-redux"
=======
import { useDispatch, useSelector } from "react-redux"
import { setSearchInput, filterSearch } from ".././store/slices/dataSlice"
>>>>>>> 7a150754ef548e42b90f52b94d613cea21fffffc
import { JobItem } from './index';

function SearchBar() {
  const jobs = useSelector((state) => state.data.value); 
<<<<<<< HEAD
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
=======
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
>>>>>>> 7a150754ef548e42b90f52b94d613cea21fffffc
      
  //     }
  //       )
  // }
  // console.log(jobs);

  function handleChange(value) {
    setSearch(value);
  }


  return (

    <div className="input-group mb-5 mt-5">
          <div className="input-group-prepend">
            <button onClick={() => {
              console.log("Searched " + search);
              dispatch(setSearchInput(search));
              dispatch(filterSearch()); 
            }} className="btn btn-primary h-100" type="button" style={{backgroundColor: '#0d6efd'}} >
              <BsSearch />
            </button>
          </div>
<<<<<<< HEAD
          <input type="search" className="form-control rounded-3 border-success" placeholder="Search" aria-label="Search" style={{ marginRight: '10px', marginLeft: '10px' }} onChange={(e) => setSearch(e.target.value)} />
=======
          <input type="text" className="form-control rounded-3 border-success" placeholder="Search" aria-label="Search" style={{ marginRight: '10px', marginLeft: '10px' }} onChange={(e) => handleChange(e.target.value)} />
>>>>>>> 7a150754ef548e42b90f52b94d613cea21fffffc
          <div className="input-group-append">
            <button className="btn btn-outline-secondary h-100" type="button">
              <BsFilter />
            </button>
          </div>
        </div>

  );
}

export default SearchBar;
