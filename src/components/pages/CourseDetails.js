import React from 'react';
import BoughtTogether from '../bought-togehter/BoughtTogether';
import BoughtTogetherCart from '../bought-togehter/BoughtTogetherCart';
import CourseContent from '../courseContent/CourseContent';
import CourseTitle from '../course_title/CourseTitle';
import Description from '../description/Description';
import Header from '../header/Header';
import InstructorInfo from '../instructors/InstructorInfo';
import Instructors from '../instructors/Instructors';
import Requirments from '../requirments/Requirments';
import StudentsAlsoBought from '../students-also-bought/StudentsAlsoBought';
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
        <StudentsAlsoBought/>
        <BoughtTogether/>
        <Instructors/>
        {/* <InstructorInfo/> */}
        {/* <BoughtTogetherCart/> */}
    </div>
  )
}

export default CourseDetails