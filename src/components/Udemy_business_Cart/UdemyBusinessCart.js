import React from 'react';
import './UdemyBusinessCart.css';
function UdemyBusinessCart() {
  return (
    <div className="instructor-cart">
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
        <img src='https://s.udemycdn.com/home/non-student-cta/ub-1x-v3.jpg'/>
    </div>
  )
}

export default UdemyBusinessCart;