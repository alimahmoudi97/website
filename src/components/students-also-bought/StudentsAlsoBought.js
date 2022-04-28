import React,{useState} from 'react';
import CourseComparison from '../course-comparison/CourseComparison';
import './StudentsAlsoBought.css';

function StudentsAlsoBought() {
    const data=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    const [itemsToShow,setItemsToShow]=useState(5);
    const [isShowMore,setShowMore]=useState(true);
    return (
        <div className="student-also-bought-container">
            <div style={{width:'35%'}}>
                <h2>Students Also Bought</h2>
                <div className="student-also-bought-courses">
                    {
                        data.slice(0,itemsToShow).map((value,index)=>{
                            return(
                                <div style={{marginTop:10}}>
                                    <CourseComparison/>
                                    <div className="line"></div>
                                </div>
                            )
                        })
                    }
                </div>
                {
                    (isShowMore) ?
                        <div className="btn-show-more-students-bought" onClick={()=>{setItemsToShow(data.length);setShowMore(false)}}><p style={{margin:0}}>Show More</p></div>
                    :
                        <div className="btn-show-more-students-bought" onClick={()=>{setItemsToShow(5);setShowMore(true)}}><p style={{margin:0}}>Show Less</p></div>
                }
                
            </div>
            
        </div>
    )
}

export default StudentsAlsoBought;