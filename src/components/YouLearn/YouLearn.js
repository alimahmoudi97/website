import React from 'react';
import {TiTick} from 'react-icons/ti';
import './YouLearn.css';

function YouLearn() {
  return (
    <div className="you-learn-container">
      <div style={{border:'1px solid',borderColor:'#d1d7dc',width:'35%',marginTop:20,paddingBottom:20}}>
          <h2 style={{marginLeft:30}}> What you'll learn </h2>
          <div className="you-learn-content-grid">
              <div className="you-learn-grid-item">
                <TiTick/>
                <span>Create their own Python Programs</span>
              </div>
              <div className="you-learn-grid-item">
                <TiTick/>
                <span>Create their own Python Programs</span>
              </div>
              <div className="you-learn-grid-item">
                <TiTick/>
                <span>Create their own Python Programs</span>
              </div>
              <div className="you-learn-grid-item">
                <TiTick/>
                <span>Create their own Python Programs</span>
              </div>
              <div className="you-learn-grid-item">
                <TiTick/>
                <span>Create their own Python Programs</span>
              </div>
          </div>
      </div>

    </div>
  )
}

export default YouLearn;