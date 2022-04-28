import React from 'react';
import InstructorInfo from './InstructorInfo';
import './Instructors.css';

function Instructors() {
  return (
    <div className="instructors-container">
        <div style={{width:'38%',marginTop:20}}>
            <h2 style={{marginLeft:30}}>Instructors</h2>
            <div style={{marginLeft:30}}>
                <InstructorInfo/>
                <InstructorInfo/>
                <InstructorInfo/>
            </div>
        </div>
        
    </div>
  )
}

export default Instructors;