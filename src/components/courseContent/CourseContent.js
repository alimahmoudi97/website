import React,{useState} from 'react';
import{MdKeyboardArrowDown} from 'react-icons/md';
import{BsPlayCircleFill} from 'react-icons/bs';
import './CourseContent.css';

function CourseContent() {
  const data=[1,2,3,4,5];
  const activePanel=[true,false,false,false,false];
  const [isExpand,setExpand]=useState(activePanel);
  const [itemsToShow,setItemsToShow]=useState(2);
  function handleActivePanel(index){
      let newArray=[...isExpand];
      newArray[index]=!newArray[index];
      // console.log(newArray);
      setExpand(newArray);
  }
  return (
    <div className="course-content-container">
        <div style={{width:'35%'}}>
            <h2>Course Content</h2>
              <div className="course-panels">
                {
                    data.slice(0,itemsToShow).map((value,index)=>{
                      return(
                        <div className="course-panel-section" onClick={()=>{handleActivePanel(index)}}>
                          <div className="course-panel-item">
                            <div>
                              <MdKeyboardArrowDown style={{width:25,hieght:25}}/>
                              <span>
                                Up and Running with Python
                              </span>
                            </div>

                            <span>2 lecture . 36min</span>
                          </div>
                          <div className={isExpand[index] ?"course-panale-expand" :"course-panale-colasp"}>
                            <div className="course-panel-lecture-container">
                              <div className="course-panel-lecture">
                                <BsPlayCircleFill/>
                                <span>lecture 1</span>
                              </div>
                              <div className="course-panel-lecture">
                                <BsPlayCircleFill/>
                                <span>lecture 2</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    })
                }
              </div>
            <div className="btn-show-more" onClick={()=>{setItemsToShow(data.length)}}><p style={{margin:0}}>Show More</p></div>
        </div>
        
    </div>
  )
}

export default CourseContent;