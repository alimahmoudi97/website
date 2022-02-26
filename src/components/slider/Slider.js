import React from 'react';
// import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import "./../../../node_modules/swiper/swiper.scss";
import "./../../../node_modules/swiper/modules/navigation/navigation.scss";
import "./../../../node_modules/swiper/modules/pagination/pagination.scss";
import "./Slider.css";
import SwiperCore,{ Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import {BsFillArrowLeftCircleFill,BsFillArrowRightCircleFill} from 'react-icons/bs'
import CartCourse from './../cart_course/CartCourse';
SwiperCore.use([Navigation]);
function SliderCart(){
    const navigationPrevRef = React.useRef(null)
    const navigationNextRef = React.useRef(null)
  
    return(
        <div className="slider-content">
          {/* <BsFillArrowLeftCircleFill ref={navigationPrevRef} style={{zIndex:1,backgroundColor:'red',width:50,height:50}}/> */}
          <div ref={navigationPrevRef} style={{position:'relative',top:120,left:20,zIndex:2,color:'green',width:50,height:50}}> <BsFillArrowLeftCircleFill style={{width:'100%',height:'100%'}}/> </div>
            <Swiper
               slidesPerView={5}
               spaceBetween={25}
            //    slidesPerGroup={5}
               preloadImages={false}
            //    slidesOffsetAfter={-100}
            //    slidesOffsetBefore={-200}
            //    effect="fade"
            //    loop={true}
            //    loopFillGroupWithBlank={true}
               pagination={{
                 clickable: true,
               }}
               onSwiper={(swiper) => {
                // Delay execution for the refs to be defined
                setTimeout(() => {
                  // Override prevEl & nextEl now that refs are defined
                  swiper.params.navigation.prevEl = navigationPrevRef.current
                  swiper.params.navigation.nextEl = navigationNextRef.current
        
                  // Re-init navigation
                  swiper.navigation.destroy()
                  swiper.navigation.init()
                  swiper.navigation.update()
                })
              }}
               modules={[Navigation]}
               className="mySwiper"
                >

                    <SwiperSlide><CartCourse/></SwiperSlide>
                    <SwiperSlide><CartCourse/></SwiperSlide>
                    <SwiperSlide><CartCourse/></SwiperSlide>
                    <SwiperSlide><CartCourse/></SwiperSlide>
                    <SwiperSlide><CartCourse/></SwiperSlide>
                    <SwiperSlide><CartCourse/></SwiperSlide>
                    <SwiperSlide><CartCourse/></SwiperSlide>
                    <SwiperSlide><CartCourse/></SwiperSlide>
                    <SwiperSlide><CartCourse/></SwiperSlide>
                    <SwiperSlide><CartCourse/></SwiperSlide>
                    <SwiperSlide><CartCourse/></SwiperSlide>
                    <SwiperSlide><CartCourse/></SwiperSlide>
                    
                    {/* <div ref={navigationNextRef} style={{position:'relative',top:50}}> <p>prev</p></div> */}
                </Swiper>
                {/* <BsFillArrowRightCircleFill ref={navigationNextRef} style={{zIndex:1,backgroundColor:'red',width:50,height:50}}/> */}
                <div ref={navigationNextRef} style={{position:'relative',top:120,right:20,zIndex:1,color:'green',width:50,height:50}}> <BsFillArrowRightCircleFill style={{width:'100%',height:'100%'}}/> </div>
        </div>
    )
}

export default SliderCart;