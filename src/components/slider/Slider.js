import React from 'react';
import Slider from "react-slick";

import "./../../../node_modules/slick-carousel/slick/slick.css"; 
import "./../../../node_modules/slick-carousel/slick/slick-theme.css";

import {BsFillArrowLeftCircleFill,BsFillArrowRightCircleFill} from 'react-icons/bs';

import CartCourse from './../cart_course/CartCourse';
import './Slider.css';
function SliderCart(){

    const SlickArrowLeft=(props)=>{
        const {className,style,onClick,currentSlide}=props;
        return(
            // <img  src='./../../assets/left_icon.jpg' alt='prevArrow' {...props}/>
            <div onClick={onClick} className="arrow-left">
                <BsFillArrowLeftCircleFill style={{width:50,height:50}} />
            </div>
            
        )
        
    };
    const SlickArrowRight=(props)=>{
        const {className,style,onClick,currentSlide}=props;
        return(
            // <img  src='./../../assets/left_icon.jpg' alt='prevArrow' {...props}/>
            <div onClick={onClick} className="arrow-right">
                <BsFillArrowRightCircleFill style={{width:50,height:50}}/>
            </div>
            
        )
        
    };
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
        swipeToSlide:false,
        // centerMode:true,
        // dotsClass:'dots',
        // vertical:false,
        // className:"center",
        // centerPadding: "160px",
        prevArrow:<SlickArrowLeft/>,
        nextArrow:<SlickArrowRight/>,
      };
    return(
            
            <Slider {...settings} >
                {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map(()=>{
                    return(
                        <div>
                            <CartCourse/>
                        </div>
                    )
                })}
                <div>
                    <CartCourse/>
                </div>
                <div>
                    <CartCourse/>
                </div>
                <div>
                    <CartCourse/>
                </div>
                <div>
                    <CartCourse/>
                </div>
                <div>
                    <CartCourse/>
                </div>
                <div>
                    <CartCourse/>
                </div>
                <div>
                    <CartCourse/>
                </div>
                <div>
                    <CartCourse/>
                </div>
                <div>
                    <CartCourse/>
                </div>
                <div>
                    <CartCourse/>
                </div>
            </Slider>
        
    )
}

export default SliderCart;