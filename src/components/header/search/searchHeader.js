import React from 'react';
import './searchHeader.css';
import { AiOutlineSearch } from "react-icons/ai";
const searchHeader=()=>{
    return(
        <div className="search">
                <AiOutlineSearch className="search-icon"/>
                <input placeholder="Search for anything"/>
        </div>
    )
}

export default searchHeader;