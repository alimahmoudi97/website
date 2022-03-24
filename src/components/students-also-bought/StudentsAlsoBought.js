import React,{useState} from 'react';
import CourseComparison from '../course-comparison/CourseComparison';
import './StudentsAlsoBought.css';

function StudentsAlsoBought() {
    const data=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    const [itemsToShow,setItemsToShow]=useState(5);
    return (
        <div className="student-also-bought-container">
            <div style={{width:'35%'}}>
                <p style={{fontWeight:'bold',fontSize:20}}>StudentsAlsoBought</p>
                <div className="student-also-bought-courses">
                    {
                        data.slice(0,itemsToShow).map((value,index)=>{
                            return(
                                <div style={{marginTop:10}}>
                                    <CourseComparison/>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            
        </div>
    )
}

export default StudentsAlsoBought;