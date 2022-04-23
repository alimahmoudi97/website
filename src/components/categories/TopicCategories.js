import React from 'react';
import './TopicCategories.css';

const gridItem1=["Development","Python","Web Development","Machine Learning"];
const gridItem2=["Business","Financial Analysis","SQL","PMP"];
const gridItem3=["IT and Software","AWS Certification","Ethical Hacking","Cyber Security"];
const gridItem4=["Design","Photoshop","Graphic Design","Drawing"];

function Item(props){
    return(
        <div className="item-topic-categories">
            <div><span style={{fontSize:20,fontWeight:'bold'}}>{props.item[0]}</span></div>
            <div >
                <div className="item-topic"><span><a href="https://www.w3schools.com/">{props.item[1]}</a></span></div>
                <span className="item-topic-students">10,000 Students</span>
            </div>
            <div>
                <div className="item-topic"><span><a href="https://www.w3schools.com/">{props.item[1]}</a></span></div>
                <span className="item-topic-students">10,000 Students</span>
            </div>
            <div>
                <div className="item-topic"><span><a href="https://www.w3schools.com/">{props.item[1]}</a></span></div>
                <span className="item-topic-students">10,000 Students</span>
            </div>
            {/* <div className="item-topic"><span><a href="https://www.w3schools.com/">{props.item[2]}</a></span></div>
            <div className="item-topic"><span><a href="https://www.w3schools.com/">{props.item[3]}</a></span></div> */}
        </div>
    )
}

function TopicCategories() {
  return (
      <div>
        <h1 className="topic-categories-text">Featured topics by category</h1>
        <div className="grid-container">
            <div className="grid-item"><Item item={gridItem1}/></div>
            <div className="grid-item"><Item item={gridItem2}/></div>
            <div className="grid-item"><Item item={gridItem3}/></div>
            <div className="grid-item"><Item item={gridItem4}/></div>
        </div>
        <button className="btnmore-topic">Explore more topics</button>
      </div>

  )
}
export default TopicCategories;