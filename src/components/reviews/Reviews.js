import React,{useState} from 'react';
import { FiSearch } from 'react-icons/fi';
import {AiOutlineLike,AiOutlineDislike} from 'react-icons/ai';

import './Reviews.css';

function ReviewUser(){
    return(
        <div>
            <div className="review-user-container">
                <div>
                    <p style={{borderRadius:'50%',width:50,height:50}}>AM</p>
                </div>
                <div className="review-user-info">
                    <div>
                        <p>Ali Mahmoudi</p>
                    </div>
                    <div style={{display:'flex'}}>
                        <p style={{marginTop:0}}>* * * * *</p>
                        <p style={{marginTop:0}}>2 years ago</p>
                    </div>
                    <p style={{marginTop:20}}>Up until now it is good that it is literally starting from scratch which is just what I was looking for. Let's see how it continues :)</p>
                    <p>Was this review helpful?</p>
                    <div style={{display:'flex'}}>
                        <AiOutlineLike style={{width:30,height:30,marginTop:10}}/>
                        <AiOutlineDislike style={{width:30,height:30,marginTop:10}}/>
                        <p style={{marginLeft:20}}>Report</p>
                    </div>
                </div>
            </div>
            <div style={{border:'1px solid'}}></div>
        </div>

    );
}

function Reviews() {
    const data=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    const [itemsToShow,setItemsToShow]=useState(5);
    const [isShowMore,setShowMore]=useState(true);
  return (
    <div className="reviews-container">
        <div style={{width:'35%'}}>
            <p style={{fontSize:16,fontWeight:'bold'}}>Reviews</p>
            <div style={{display:'flex'}}>
                <input style={{width:400,height:40,fontSize:18}} placeholder="Search reviews"/>
                <FiSearch style={{width:40,height:45}}/>
                <select style={{marginLeft:100}}>
                    <option>All ratings</option>
                    <option>Five star</option>
                    <option>Four star</option>
                    <option>Three star</option>
                    <option>Two star</option>
                    <option>One star</option>
                </select>
                
            </div>
            <div>
                {data.slice(0,itemsToShow).map(()=>{
                    return(<ReviewUser/>)
                })}
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

export default Reviews;