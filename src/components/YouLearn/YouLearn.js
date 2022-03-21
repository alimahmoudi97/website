import React from 'react';
import './YouLearn.css';

function YouLearn() {
  return (
    <div className="you-learn-container">
      <div style={{border:'1px solid',marginTop:20}}>
          <p style={{fontWeight:'bold',marginLeft:30,fontSize:20}}> What you'll learn </p>
          <div className="you-learn-content-grid">
              <div className="you-learn-grid-item"><p>* Create their own Python Programs</p></div>
              <div className="you-learn-grid-item"><p>* Create their own Python Programs</p></div>
              <div className="you-learn-grid-item"><p>* Create their own Python Programs</p></div>
              <div className="you-learn-grid-item"><p>* Create their own Python Programs</p></div>
              <div className="you-learn-grid-item"><p>* Create their own Python Programs</p></div>
          </div>
      </div>

    </div>
  )
}

export default YouLearn;