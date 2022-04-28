import React from 'react';
import Rating from '@mui/material/Rating';
import './StudentFeedback.css';

function StudentFeedback() {
  return (
    <div className="student-feedback-container">
        <div style={{width:'35%'}}>
            <h2>Student feedback</h2>
            <div className="student-feedback-rate">
                <div style={{display:'flex',flexDirection:'column',alignItems:'center',color:'#b4690e'}}>
                    <span className="avrage-student-feedback-amount">4.3</span>
                    <span className="avarage-student-feedback-rate"><Rating  value={4} readOnly/></span>
                    <span>Course Rating</span>
                </div>
                <div style={{marginLeft:20}}> 
                    <div className="review-student-feedback">
                        <span className="slide-bar-student-feedback">
                            <span className="slide-bar-student-feedback-amount" style={{width:'70%'}}></span>
                        </span>
                        <Rating size="small" value={4} readOnly/>
                        <span style={{color:"#5624d0"}}>73%</span>
                    </div>
                    <div className="review-student-feedback">
                        <span className="slide-bar-student-feedback">
                            <span className="slide-bar-student-feedback-amount" style={{width:'43%'}}></span>
                        </span>
                        <Rating size="small" value={3} readOnly/>
                        <span style={{color:"#5624d0"}}>43%</span>
                    </div>
                    <div className="review-student-feedback">
                        <span className="slide-bar-student-feedback">
                            <span className="slide-bar-student-feedback-amount" style={{width:'23%'}}></span>
                        </span>
                        <Rating size="small" value={2} readOnly/>
                        <span style={{color:"#5624d0"}}>23%</span>
                    </div>
                    <div className="review-student-feedback">
                        <span className="slide-bar-student-feedback">
                            <span className="slide-bar-student-feedback-amount" style={{width:'13%'}}></span>
                        </span>
                        <Rating size="small" value={2} readOnly/>
                        <span style={{color:"#5624d0"}}>13%</span>
                    </div>
                    <div className="review-student-feedback">
                        <span className="slide-bar-student-feedback">
                            <span className="slide-bar-student-feedback-amount" style={{width:'5%'}}></span>
                        </span>
                        <div>
                            <Rating size="small" value={0} readOnly/>
                        </div>
                        
                        <div>
                            <span style={{color:"#5624d0"}}>3%</span>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default StudentFeedback;