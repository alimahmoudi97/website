import React from "react";
import './Categories.css';

function Cart(){
    return(
        <div>
            <img src="https://s.udemycdn.com/home/top-categories/lohp-category-design-v2.jpg"/>
            <p style={{margin:0}}>Design</p>
        </div>
    )
}
function Categories(){
    return(
        <div className="grid-container">
            <div className="grid-item"><Cart/></div>
            <div className="grid-item"><Cart/></div>
            <div className="grid-item"><Cart/></div>
            <div className="grid-item"><Cart/></div>
            <div className="grid-item"><Cart/></div>
            <div className="grid-item"><Cart/></div>
            <div className="grid-item"><Cart/></div>
            <div className="grid-item"><Cart/></div>
        </div>
    )
}

export default Categories;