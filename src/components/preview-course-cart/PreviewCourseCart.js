import React from 'react';
import {AiOutlineHeart,AiOutlineMobile} from 'react-icons/ai';
import {MdOutlinePlayLesson} from 'react-icons/md';
import {RiArticleLine} from 'react-icons/ri';
import {HiOutlineFolderDownload} from 'react-icons/hi';
import {IoIosInfinite} from 'react-icons/io';
import {GiTrophyCup} from 'react-icons/gi';
import './PreviewCourseCart.css';

function PreviewCourseCart() {
  return (
    <div className="preview-course-cart-container">
        <div>
            <img style={{width:'100%',height:'20%'}} src="https://images.unsplash.com/photo-1559583985-c80d8ad9b29f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwxMDY1OTc2fHxlbnwwfHx8fA%3D%3D&w=1000&q=80"/>
            <div style={{width:'90%'}} className="preview-course-cart-details">
                <span style={{fontSize:20,fontWeight:'bold'}}>94.55$</span>
                <div style={{display:'flex'}}>
                    <button className="btn-pre-add-cart">Add to cart</button>
                    <div className="heart-container">
                        <AiOutlineHeart style={{width:30,height:30,padding:10}}/>
                    </div>
                </div>
                <button className="btn-buy-now-cart">Buy now</button>
                <div><p style={{fontSize:14,textAlign:'center'}}>30-Day Money-Back Guarantee</p></div>
                <p style={{fontSize:16,fontWeight:'bold'}}>This course includes:</p>
                <div style={{display:'flex',paddingTop:10}}>
                    <MdOutlinePlayLesson/>
                    <p style={{margin:0,paddingLeft:10}}>14 hours on-demand video</p>
                </div>
                <div style={{display:'flex',paddingTop:10}}>
                    <RiArticleLine/>
                    <p style={{margin:0,paddingLeft:10}}>1 article</p>
                </div>
                <div style={{display:'flex',paddingTop:10}}>
                    <HiOutlineFolderDownload/>
                    <p style={{margin:0,paddingLeft:10}}>3 downloadable resources</p>
                </div>
                <div style={{display:'flex',paddingTop:10}}>
                    <IoIosInfinite/>
                    <p style={{margin:0,paddingLeft:10}}>Full lifetime access</p>
                </div>
                <div style={{display:'flex',paddingTop:10}}>
                    <AiOutlineMobile/>
                    <p style={{margin:0,paddingLeft:10}}>Access on mobile and TV</p>
                </div>
                <div style={{display:'flex',paddingTop:10}}>
                    <GiTrophyCup/>
                    <p style={{margin:0,paddingLeft:10}}>Certificate of completion</p>
                </div>
                <div className="share-gift-coupon">
                        <p>Share</p>
                        <p>Gift this course</p>
                        <p>Apply coupon</p>
                </div>
            </div>
            <div style={{width:'100%',border:'1px solid'}}></div>
            <div style={{width:'90%',height:'30%'}} className="preview-course-cart-details">
                <p style={{fontSize:20,fontWeight:'bold'}}>Training 5 or more people?</p>
                <p>Get your team access to 6,000+ top Udemy courses anytime, anywhere.</p>
                <button className="btn-udemy-business">Try Udemy Business</button>
            </div>
        </div>
    </div>
  )
}

export default PreviewCourseCart;