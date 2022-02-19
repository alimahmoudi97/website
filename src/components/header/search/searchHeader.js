import React from 'react';
import './searchHeader.css';
import { AiOutlineSearch } from "react-icons/ai";
const searchHeader=()=>{
    return(
        <div className="search">
                <AiOutlineSearch style={{width:25,height:25,marginTop:22,marginLeft:20}}/>
                <input placeholder="search..."/>
        </div>
    )
}

export default searchHeader;