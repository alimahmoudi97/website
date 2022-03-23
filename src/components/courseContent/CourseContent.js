import React,{useState} from 'react';
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
            <p style={{fontWeight:'bold',fontSize:20}}>Course Content</p>
              <div className="course-panels">
                {
                    data.slice(0,itemsToShow).map((value,index)=>{
                      return(
                        <div className="course-panel-section" onClick={()=>{handleActivePanel(index)}}>
                            ***** {value}
                          <div className={isExpand[index] ?"course-panale-expand" :"course-panale-colasp"}>
                            <div style={{borderTop:'1px solid'}}>Ali {value}</div>
                            <div>dd</div>
                            {/* <ul style={{margin:0,borderTop:'1px solid',listStyle:'none'}}>
                              <li>1</li>
                              <li>2</li>
                            </ul> */}
                          </div>
                        </div>
                      )
                    })
                }
              </div>
            {/* <button style={{backgroundColor:'red'}} onClick={()=>{setItemsToShow(data.length)}}>Show More</button> */}
            <div className="btn-show-more" onClick={()=>{setItemsToShow(data.length)}}><p style={{margin:0}}>Show More</p></div>
        </div>
        
    </div>
  )
}

export default CourseContent;