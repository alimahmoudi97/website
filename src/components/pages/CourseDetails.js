import React, { useEffect, useState } from "react";
import BoughtTogether from "../bought-togehter/BoughtTogether";
import BoughtTogetherCart from "../bought-togehter/BoughtTogetherCart";
import CourseContent from "../courseContent/CourseContent";
import CourseTitle from "../course_title/CourseTitle";
import Description from "../description/Description";
import Header from "../header/Header";
import InstructorInfo from "../instructors/InstructorInfo";
import Instructors from "../instructors/Instructors";
import Requirments from "../requirments/Requirments";
import Reviews from "../reviews/Reviews";
import StudentFeedback from "../student-feedback/StudentFeedback";
import StudentsAlsoBought from "../students-also-bought/StudentsAlsoBought";
import YouLearn from "../YouLearn/YouLearn.js";
import PreviewCourseCart from "../preview-course-cart/PreviewCourseCart";
import "./CourseDetails.css";
import useScrollbarPosition from "./../hooks/useScrollbarPosition";

function CourseDetails() {
  // const positionScroll = useScrollbarPosition();
  // const [positionCourseCart, setPositionCourseCart] = useState("absolte");
  // useEffect(() => {
  //   if (positionScroll > 1000 && positionScroll < 5200) {
  //     setPositionCourseCart("fixed");
  //   } else {
  //     setPositionCourseCart("absolte");
  //   }
  //   document.documentElement.style.setProperty(
  //     "--postion-scroll",
  //     positionCourseCart
  //   );
  //   // console.log(positionScroll);
  // }, [positionScroll]);

  return (
    <div>
      <div>
        <div>
          {/* <div style={{ position: "sticky" }}>
            <div className="sidebar-container">
              <PreviewCourseCart />
            </div>
          </div> */}
          <CourseTitle />
          <YouLearn />
          <CourseContent />
          <Requirments />
          <Description />
          <StudentsAlsoBought />
          <div style={{ marginTop: 20 }}>
            <BoughtTogether />
          </div>
          <Instructors />
          <StudentFeedback />
          <Reviews />
        </div>
        {/* <div style={{ height: 200, backgroundColor: "red" }}></div> */}
        {/* <div
          style={{
            position: "fixed",
            top: 0,
            right: 100,
            height: "100%",
            backgroundColor: "ButtonFace",
          }}
        >
          <PreviewCourseCart />
        </div> */}
        {/* <div style={{position:'sticky',top:0,height:'100%',backgroundColor:'ButtonFace'}}>
            <PreviewCourseCart/>
          </div> */}
      </div>
    </div>
  );
}

export default CourseDetails;
