import React from 'react';
import './CourseTitle.css';

function CourseTitle() {
  return (
    <div className="container-course-title">
        <div style={{width:'32%'}}>
            <p style={{fontSize:24,fontWeight:'bold',color:'white'}}>
                Learn Python: The Complete Python Programming Course
            </p>
            <p style={{color:'white'}}>
                Learn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!
            </p>
            <p style={{color:'white'}}>
                starts ----- (1,842 ratings) 11,920 students
            </p>
            <p style={{color:'white'}}>
                Created by *** ***
            </p>
            <div style={{display:'flex',color:'white'}}>
                <p>* Last updated 9/2015</p>
                <p style={{marginLeft:20}}>* English</p>
                <p style={{marginLeft:20}}>* English</p>
            </div>
        </div>
    </div>
  )
}

export default CourseTitle;