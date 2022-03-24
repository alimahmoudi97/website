import React from 'react';
import CourseContent from '../courseContent/CourseContent';
import CourseTitle from '../course_title/CourseTitle';
import Description from '../description/Description';
import Header from '../header/Header';
import Requirments from '../requirments/Requirments';
import YouLearn from '../YouLearn/YouLearn.js';


function CourseDetails() {
  return (
    <div>
        <Header/>
        <CourseTitle/>
        <YouLearn/>
        <CourseContent/>
        <Requirments/>
        <Description/>
    </div>
  )
}

export default CourseDetails