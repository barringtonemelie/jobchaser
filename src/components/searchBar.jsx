import { BsSearch, BsFilter } from 'react-icons/bs';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { setSearchInput, filterSearch } from ".././store/slices/dataSlice"
// import { JobItem } from './index';

function SearchBar() {
  const jobs = useSelector((state) => state.data.value); 
  const [search, setSearch] = useState();
  const dispatch = useDispatch()
 
  function handleChange(value) {
    setSearch(value.toString().toLowerCase());
  }

  const [showFilters, setShowFilters] = useState(false);

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  // Jag har lagt några extra taggar, vi kan göra koden snyggare på nästa gång vi jobbar tillsammans
  const tags = [
    "backend",
    "on-site",
    "react",
    "remote",
    "frontend",
    "internship",
    "part-time",
    "fullstack",
    "full-time",
    "developer",
  ];

  return (

    <div className="input-group mb-5 mt-5">
          <div className="input-group-prepend">
            <button onClick={() => {
              console.log("Searched " + search.toString().toLowerCase());
              dispatch(setSearchInput(search));
              dispatch(filterSearch()); 
              setShowFilters(false);
            }} className="btn btn-primary h-100" type="button" style={{backgroundColor: '#0d6efd'}} >
              <BsSearch />
            </button>
          </div>
          <input type="search" className="form-control rounded-3 border-success" placeholder="Search" aria-label="Search" style={{ marginRight: '10px', marginLeft: '10px' }} onChange={(e) => handleChange(e.target.value)} />
          <div className="input-group-append">
            <button className="btn btn-outline-secondary h-100" type="button" onClick={toggleFilters}>
              <BsFilter />
            </button>
          </div>
          {showFilters && (
            <div className="dropdown-menu show" style={{ marginTop: "60px", width: '100%', display: 'flex', flexWrap: 'wrap' }}>
              {tags.map((tag, index) => (
                <button type="button" className="btn btn-secondary" key={index} style={{ margin: '5px' }} onClick={() => {
                  // handleChange(tag);
                  dispatch(setSearchInput(tag));
                  dispatch(filterSearch());
                  setShowFilters(false); 
                  console.log(tag);
                }}>{tag}</button>
              ))}
            </div>
            )}
        </div>

  );
}

export default SearchBar;
