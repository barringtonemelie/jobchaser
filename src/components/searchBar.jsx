import { BsSearch, BsFilter } from 'react-icons/bs';
import 'bootstrap/dist/css/bootstrap.min.css';

function SearchBar() {
  return (

    <div className="input-group mb-3 mt-3">
          <div className="input-group-prepend">
            <button className="btn btn-primary" type="button" style={{backgroundColor: '#0d6efd'}}>
              <BsSearch />
            </button>
          </div>
          <input type="text" className="form-control rounded-3 border-success" placeholder="Search" aria-label="Search" style={{ marginRight: '10px', marginLeft: '10px' }} />
          <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="button">
              <BsFilter />
            </button>
          </div>
        </div>

  );
}

export default SearchBar;
