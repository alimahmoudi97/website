import React from 'react';
import './CourseComparison.css';

function CourseComparison() {
  return (
    <div className="course-comparison-container">
      <div className="course-comarison-image">
        <img style={{height:80,width:80}} src="https://wallpapershome.com/images/pages/ico_h/23795.jpg"/>
      </div>
      <div className="course-comarison-description">
        <div style={{width:300,marginLeft:10}}>
            <p style={{fontSize:16,fontWeight:'bold',marginTop:0}}>
              Python for Beginners - Learn Programming from scratch
            </p>
            <p>
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