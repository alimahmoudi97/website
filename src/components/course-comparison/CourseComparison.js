import React from 'react';
import './CourseComparison.css';

function CourseComparison() {
  return (
    <div className="course-comparison-container">
      <div className="course-comarison-image">
        <img style={{height:'100%',width:'100%'}} src="https://wallpapershome.com/images/pages/ico_h/23795.jpg"/>
      </div>
      <div className="course-comarison-description">
        <div style={{marginLeft:10}}>
            <p style={{fontSize:20,fontWeight:'bold'}}>
              Python for Beginners - Learn Programming from scratch
            </p>
            <p style={{marginTop:40}}>
              3 totla hours Update 6/2018
            </p>
        </div>
      </div>
      <div className="course-comarison-rate">
        <p>
          **4
        </p>
      </div>
      <div className="course-comarison-students-view">
        <p>
          4984 student
        </p>
      </div>
      <div className="course-comarison-price">
        <p>25$</p>
      </div>
    </div>
  )
}

export default CourseComparison;