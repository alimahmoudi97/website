import React from 'react';
import CourseContent from '../courseContent/CourseContent';
import CourseTitle from '../course_title/CourseTitle';
import Header from '../header/Header';
import YouLearn from '../YouLearn/YouLearn.js';


function CourseDetails() {
  return (
    <div>
        <Header/>
        <CourseTitle/>
        <YouLearn/>
        <CourseContent/>
    </div>
  )
}

export default CourseDetails