import React from 'react';
import './StudentFeedback.css';

function StudentFeedback() {
  return (
    <div className="student-feedback-container">
        <div style={{width:'35%'}}>
            <p style={{fontSize:16,fontWeight:'bold'}}>Student feedback</p>
            <div className="student-feedback-rate">
                <div>
                    <p>4.3</p>
                    <p>*******</p>
                    <p>Course Rating</p>
                </div>
                <div style={{marginLeft:20,height:50}}> 
                    <div style={{display:'flex'}}>
                        <p style={{margin:0}}>[**************************----------]</p>
                        <p style={{margin:0}}>@ @ @ @ @</p>
                        <p style={{margin:0}}>43%</p>
                    </div>
                    <div style={{display:'flex'}}>
                        <p style={{margin:0}}>[*****************-------------------]</p>
                        <p style={{margin:0}}>@ @ @ @ @</p>
                        <p style={{margin:0}}>43%</p>
                    </div>
                    <div style={{display:'flex'}}>
                        <p style={{margin:0}}>[********----------------------------]</p>
                        <p style={{margin:0}}>@ @ @ @ @</p>
                        <p style={{margin:0}}>43%</p>
                    </div>
                    <div style={{display:'flex'}}>
                        <p style={{margin:0}}>[***---------------------------------]</p>
                        <p style={{margin:0}}>@ @ @ @ @</p>
                        <p style={{margin:0}}>43%</p>
                    </div>
                    <div style={{display:'flex'}}>
                        <p style={{margin:0}}>[*-----------------------------------]</p>
                        <p style={{margin:0}}>@ @ @ @ @</p>
                        <p style={{margin:0}}>43%</p>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default StudentFeedback;