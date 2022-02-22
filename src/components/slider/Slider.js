import React from 'react';
import Slider from "react-slick";

import "./../../../node_modules/slick-carousel/slick/slick.css"; 
import "./../../../node_modules/slick-carousel/slick/slick-theme.css";

import CartCourse from './../cart_course/CartCourse';
// import './Slider.css';
function SliderCart(){
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
        swipeToSlide:false,
        // dotsClass:'dots',
        // vertical:false,
        // className:'items'
      };
    return(
        <div>
            <Slider {...settings}>
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
        </div>
    )
}

export default SliderCart;