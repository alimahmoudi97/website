import React from 'react';
import InstructorInfo from './InstructorInfo';
import './Instructors.css';

function Instructors() {
  return (
    <div className="instructors-container">
        <div style={{width:'38%',marginTop:20}}>
            <p style={{fontWeight:'bold',marginLeft:30,fontSize:20}}>Instructors</p>
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