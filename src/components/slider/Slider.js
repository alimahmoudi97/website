import React from 'react';
import Slider from "react-slick";

import "./../../../node_modules/slick-carousel/slick/slick.css"; 
import "./../../../node_modules/slick-carousel/slick/slick-theme.css";

import CartCourse from './../cart_course/CartCourse';

function SliderCart(){
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        swipeToSlide:false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
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
            </Slider>
        </div>
    )
}

export default SliderCart;