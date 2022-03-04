import React from 'react'
import './TopicCategories.css'
function Item(){
    return(
        <div>
            <h4>Development</h4>
            <div> <a href="https://www.w3schools.com/">python</a></div>
            <div> <a href="https://www.w3schools.com/">web development</a></div>
            <div> <a href="https://www.w3schools.com/">machin learning</a></div>
        </div>
    )
}

function TopicCategories() {
  return (
      <div>
        <div className="grid-container">
            <div className="grid-item"><Item/></div>
            <div className="grid-item"><Item/></div>
            <div className="grid-item"><Item/></div>
            <div className="grid-item"><Item/></div>
        </div>
        <button className="btnmore-topic">Explore more topics</button>
      </div>

  )
}
export default TopicCategories;