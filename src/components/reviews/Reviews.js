import React,{useState} from 'react';
import { FiSearch } from 'react-icons/fi';
import {AiOutlineLike,AiOutlineDislike} from 'react-icons/ai';
import Rating from '@mui/material/Rating';

import './Reviews.css';

function ReviewUser(){
    return(
        <div>
            <div className="review-user-container">
                <div className="review-user-avatar-container">
                    <div className="review-user-avatar">
                        AM
                    </div>
                </div>

                <div className="review-user-info">
                    <div className="review-username">
                        <span>Ali Mahmoudi</span>
                    </div>
                    <div style={{display:'flex',marginTop:5}}>
                        
                        <Rating value={3} size="medium" readOnly/>
                        
                        <span style={{marginTop:0}}>2 years ago</span>
                    </div>
                    <p style={{marginTop:5}}>Up until now it is good that it is literally starting from scratch which is just what I was looking for. Let's see how it continues :)</p>
                    <span>Was this review helpful?</span>
                    <div style={{display:'flex',alignItems:'center',marginBottom:10,marginTop:10}}>
                        <div className="review-like">
                            <AiOutlineLike style={{width:30,height:30}}/>
                        </div>
                        <div className="review-dislike" style={{marginLeft:5}}>
                            <AiOutlineDislike style={{width:30,height:30}}/>
                        </div>
                        
                        <span style={{marginLeft:20}}>Report</span>
                    </div>
                </div>
            </div>
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
            <h2>Reviews</h2>
            <div style={{display:'flex'}}>
                <form className="search-reviews-input-form">
                    <input style={{width:400,fontSize:18}} placeholder="Search reviews"/>
                    <FiSearch style={{width:50,height:'100%',backgroundColor:'black',color:'white'}}/>
                </form>
                <select style={{marginLeft:100,fontSize:15}}>
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
                        <div className="btn-show-more-students-bought" onClick={()=>{setItemsToShow(data.length);setShowMore(false)}}><p style={{margin:0}}>Show More Reviews</p></div>
                    :
                        <div className="btn-show-more-students-bought" onClick={()=>{setItemsToShow(5);setShowMore(true)}}><p style={{margin:0}}>Show Less Reviews</p></div>
            }
        </div>
    </div>
  )
}

export default Reviews;