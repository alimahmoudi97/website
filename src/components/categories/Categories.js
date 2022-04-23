import React from "react";
import './Categories.css';

const data=[
    {
        name:"Design",
        image:"https://s.udemycdn.com/home/top-categories/lohp-category-design-v2.jpg"
    },
    {
        name:"Development",
        image:"https://s.udemycdn.com/home/top-categories/lohp-category-development-v2.jpg"
    },
    {
        name:"Marketing",
        image:"https://s.udemycdn.com/home/top-categories/lohp-category-marketing-v2.jpg"
    },
    {
        name:"IT and Software",
        image:"https://s.udemycdn.com/home/top-categories/lohp-category-it-and-software-v2.jpg"
    },
    {
        name:"Personal Development",
        image:"https://s.udemycdn.com/home/top-categories/lohp-category-personal-development-v2.jpg"
    },
    {
        name:"Business",
        image:"https://s.udemycdn.com/home/top-categories/lohp-category-business-v2.jpg"
    },
    {
        name:"Photography",
        image:"https://s.udemycdn.com/home/top-categories/lohp-category-photography-v2.jpg"
    },
    {
        name:"Music",
        image:"https://s.udemycdn.com/home/top-categories/lohp-category-music-v2.jpg"
    },
];

function Cart(props){
    return(
        <div className="top-categories-cart">
            <div><img src={props.item.image}/></div>
            <span>{props.item.name}</span>
        </div>
    )
}
function Categories(){
    return(
        <div className="grid-container">
            <div className="grid-item"><Cart item={data[0]}/></div>
            <div className="grid-item"><Cart item={data[1]}/></div>
            <div className="grid-item"><Cart item={data[2]}/></div>
            <div className="grid-item"><Cart item={data[3]}/></div>
            <div className="grid-item"><Cart item={data[4]}/></div>
            <div className="grid-item"><Cart item={data[5]}/></div>
            <div className="grid-item"><Cart item={data[6]}/></div>
            <div className="grid-item"><Cart item={data[7]}/></div>
        </div>
    )
}

export default Categories;