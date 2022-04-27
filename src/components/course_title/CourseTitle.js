import React from 'react';
import {ImNotification} from 'react-icons/im';
import {MdLanguage} from 'react-icons/md';
import {MdOutlineSubtitles} from 'react-icons/md';
import Rating from '@mui/material/Rating';
import './CourseTitle.css';

function CourseTitle() {
  return (
    <div className="container-course-title">
        <div style={{width:'32%'}}>
            <h1 style={{fontWeight:'bold',color:'white'}}>
                Learn Python: The Complete Python Programming Course
            </h1>
            <p style={{color:'white',fontSize:'1.2rem'}}>
                Learn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!
            </p>
            <div>
                <div className="rate-course-title">
                    <span style={{color:"#f3ca8c"}}>4.3</span>
                    <Rating value={5} precision={0.1} size="small"/>
                    <a style={{marginLeft:10}} href="#">(2,055 ratings)</a>
                    <span style={{color:'white',marginLeft:10}}>13,234 students</span>
                </div>
            </div>
            <div style={{color:'white',fontSize:14,marginTop:10}}>
                <span>Created by &nbsp;</span>
                <a href="#">Ali Mahmoudi,</a>
                <a href="#">Ali Mahmoudi</a>
            </div>
            <div style={{display:'flex',color:'white',fontSize:14,marginTop:10}}>
                <div className="last-update-container">
                    <ImNotification/>
                    <span>Last updated 9/2015</span>
                </div>
                <div className="language-course-title-container">
                    <MdLanguage/>
                    <span>English</span>
                </div>
                <div className="language-subtitle-title-container">
                    <MdOutlineSubtitles/>
                    <span>English</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CourseTitle;