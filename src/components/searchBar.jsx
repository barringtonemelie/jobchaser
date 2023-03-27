import { BsSearch, BsFilter } from 'react-icons/bs';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { setSearchInput, filterSearch } from ".././store/slices/dataSlice"
// import { JobItem } from './index';

function SearchBar({ showFilters, setShowFilters }) {
  const jobs = useSelector((state) => state.data.value); 
  const [search, setSearch] = useState("");
  const [searchValue, setSearchValue] = useState(''); 
  // const [showFilters, setShowFilters] = useState(false);
  const dispatch = useDispatch()
 
  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  function handleChange(value) {
    setSearch(value.toString().toLowerCase());
    setSearchValue(value);
    dispatch(setSearchInput(value));
    dispatch(filterSearch()); 
    setShowFilters(false);
  }

  function handleEnter(pressedKey) {
    if (pressedKey === "Enter") {
      console.log("Searched " + search.toString().toLowerCase());
      dispatch(setSearchInput(search));
      dispatch(filterSearch()); 
      setShowFilters(false);
    }
  }

  const handleTagClick = (tag) => {
    setSearchValue("#" + tag);
    setShowFilters(false);
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
    "job",
  ];

  return (

    <div className="input-group mb-5 mt-5">
          <div className="input-group-prepend">
            <button onClick={() => {
              console.log("Searched " + search.toString().toLowerCase());
              dispatch(setSearchInput(search));
              dispatch(filterSearch()); 
              setShowFilters(false);
            }} className={"btn btn-primary h-100"} type="button" style={{backgroundColor: '#0d6efd'}} >
              <BsSearch />
            </button>
          </div>
          <input type="search" className="form-control rounded-3 border-success" placeholder="Search" aria-label="Search" style={{ marginRight: '10px', marginLeft: '10px' }} value={searchValue} onChange={(e) => handleChange(e.target.value)} onKeyDown={(e) => handleEnter(e.key)} />
          <div className="input-group-append">
            <button className={`btn ${showFilters ? 'btn-primary h-100' : 'btn-outline-secondary h-100'}`} type="button" onClick={toggleFilters} id="filterBtn">
              <BsFilter />
            </button>
          </div>
          {showFilters && (
            <div className="dropdown-menu show" style={{ backgroundColor: '#d1d1d1', marginTop: "60px", width: '100%', display: 'flex', flexWrap: 'wrap' }}>
              {tags.map((tag, index) => (
                <button type="button" className="btn btn-secondary" key={index} style={{ margin: '5px' }} onClick={() => {
                  // handleChange(tag);
                  dispatch(setSearchInput(tag));
                  dispatch(filterSearch());
                  setShowFilters(false); 
                  handleTagClick(tag)
                  // console.log(tag);
                }}>{"#" + tag}</button>
              ))}
            </div>
            )}
        </div>

  );
}

export default SearchBar;
