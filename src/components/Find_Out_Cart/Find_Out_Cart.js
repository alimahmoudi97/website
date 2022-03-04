import React from 'react';
import './Find_Out_Cart.css';
function FindOutCart() {
  return (
    <div className="instructor-cart">
        <img src='https://s.udemycdn.com/home/non-student-cta/transform-1x-v3.jpg'/>
        <div className='description-cart'>
            <p style={{fontSize:30,fontWeight:'bolder'}}>
                Become an instructor
            </p>
            <div  style={{width:'80%'}}>
                <p style={{fontSize:20,fontWeight:'lighter'}}>
                    Instructors from around the world teach millions of students on Udemy. We provide the tools and skills to teach what you love.
                </p>
            </div>
            <button>Start teaching today </button>
        </div>
    </div>
  )
}

export default FindOutCart;