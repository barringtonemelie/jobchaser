import { BsSearch, BsFilter } from 'react-icons/bs';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { setSearchInput, filterSearch } from ".././store/slices/dataSlice"


function SearchBar({ showFilters, setShowFilters, currentTag, setCurrentTag, setOffset }) {
  const [search, setSearch] = useState("");
  const [searchValue, setSearchValue] = useState('');
  const dispatch = useDispatch()

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  function handleChange(value) {
    setSearch(value.toString().toLowerCase());
    setSearchValue(value.toString().toLowerCase());
    dispatch(setSearchInput(value.toString().toLowerCase()));
    dispatch(filterSearch());
    setShowFilters(false);
  }

  function handleEnter(pressedKey) {
    if (pressedKey === "Enter") {
      dispatch(setSearchInput(search));
      dispatch(filterSearch());
      setShowFilters(false);
    }
  }

  const handleTagClick = (tag) => {
    //Uppdatera state med klickad tag 
    const urlTag = "&q=" + tag.replace(" ", "%20");
    setCurrentTag(urlTag);
    setOffset(0); 
    //Stäng tag-menyn
    setShowFilters(false);
  };

  // Jag har lagt några extra taggar, vi kan göra koden snyggare på nästa gång vi jobbar tillsammans
  const tags = [
    "Fullstack Developer",
    "Software Developer",
    "Backend",
    "Frontend",
    "Data",
    "Data Engineer",
    "Data Scientist",
    "IT",
    "Data/IT",
    "Sytemutvecklare",
    "Mjukvaruutvecklare",
    "UX",
    "DevOps"
  ];

  return (

    <div className="input-group mb-5 mt-5">
          <input type="search" className="form-control rounded-3 border-success" placeholder="Search" aria-label="Search bar" style={{ marginRight: '10px' }} value={searchValue} onChange={(e) => handleChange(e.target.value)} onKeyDown={(e) => handleEnter(e.key)} />
          <div className="input-group-append">
            <button className={`btn ${showFilters ? 'btn-primary h-100' : 'btn-outline-secondary h-100'}`} aria-label="Filter" type="button" onClick={toggleFilters} id="filterBtn">
              <BsFilter />
            </button>
          </div>
          {showFilters && (
            <div className="dropdown-menu show" style={{ backgroundColor: '#d1d1d1', marginTop: "60px", width: '100%', display: 'flex', flexWrap: 'wrap' }}>
              {tags.map((tag, index) => (
                <button type="button" className="btn btn-secondary" key={index} style={{ margin: '5px' }} onClick={() => {
                  setShowFilters(false);
                  handleTagClick(tag)
                }}>{"#" + tag}</button>
              ))}
            </div>
            )}
        
        </div>

  );
}

export default SearchBar;
