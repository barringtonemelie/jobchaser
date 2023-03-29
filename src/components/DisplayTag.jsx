import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { setSearchInput, filterSearch } from ".././store/slices/dataSlice"

function DisplayTag ({ tag }) {

    let modifiedTag = tag.replace("%20", " "); 
    modifiedTag = modifiedTag.replace("&q=", "#"); 

    return (
      <div>
        <p>{modifiedTag}</p>
      </div>
    );
}

export default DisplayTag; 