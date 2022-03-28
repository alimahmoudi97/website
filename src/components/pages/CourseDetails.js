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
import Reviews from '../reviews/Reviews';
import StudentFeedback from '../student-feedback/StudentFeedback';
import StudentsAlsoBought from '../students-also-bought/StudentsAlsoBought';
import YouLearn from '../YouLearn/YouLearn.js';
import Footer from '../footer/Footer';

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
        <StudentFeedback/>
        <Reviews/>
        <Footer/>
        {/* <InstructorInfo/> */}
        {/* <BoughtTogetherCart/> */}
    </div>
  )
}

export default CourseDetails