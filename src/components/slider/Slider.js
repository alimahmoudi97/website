import React,{useEffect} from 'react';
// import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import "./../../../node_modules/swiper/swiper.scss";
import "./../../../node_modules/swiper/modules/navigation/navigation.scss";
import "./../../../node_modules/swiper/modules/pagination/pagination.scss";
import "./Slider.css";
import SwiperCore,{ Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import {BsFillArrowLeftCircleFill,BsFillArrowRightCircleFill} from 'react-icons/bs';
import { usePopper } from 'react-popper';
import CartCourse from './../cart_course/CartCourse';
import CartBuy from './../cart_buy/CartBuy.js';


SwiperCore.use([Navigation]);
function SliderCart(){
    const arrayData=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    const [offsetCart,setOffsetCart]=React.useState(0);
    const navigationPrevRef = React.useRef(null);
    const navigationNextRef = React.useRef(null);
    const [showCartBuy,setShowCartBuy]=React.useState(false);
    const [showCartIndex,setShowCartIndex]=React.useState(0);
    const [referenceElement, setReferenceElement] = React.useState(null);
    const [popperElement, setPopperElement] = React.useState(null);

    const [arrowElement, setArrowElement] = React.useState(null);

    const { styles, attributes } = usePopper(referenceElement, popperElement, {
      modifiers: [{ name: 'arrow', options: {element: arrowElement }}],placement:'right'
    });

    
    return(
        <div className="slider-content">
          {/* <BsFillArrowLeftCircleFill ref={navigationPrevRef} style={{zIndex:1,backgroundColor:'red',width:50,height:50}}/> */}
          <div ref={navigationPrevRef} style={{position:'relative',top:120,left:20,zIndex:2,width:50,height:50}} onClick={()=>{if(offsetCart<=0){setOffsetCart(0)}else{setOffsetCart(offsetCart-1)};console.log(offsetCart)}}> <BsFillArrowLeftCircleFill style={{width:'100%',height:'100%'}}/> </div>
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
                >
                    {arrayData.map((item,index)=>{return <SwiperSlide><div className="cart-course-slide" ref={(showCartIndex===index) ? setReferenceElement : null}  onMouseEnter={()=>{setShowCartBuy(true);setShowCartIndex(index)}} onMouseLeave={()=>{setShowCartBuy(false)}}><CartCourse/></div></SwiperSlide>})}
                </Swiper>
                {/* <BsFillArrowRightCircleFill ref={navigationNextRef} style={{zIndex:1,backgroundColor:'red',width:50,height:50}}/> */}
                <div ref={navigationNextRef} style={{position:'relative',top:120,right:20,zIndex:1,width:50,height:50}} onClick={()=>{setOffsetCart(offsetCart+1);console.log(offsetCart)}}> <BsFillArrowRightCircleFill style={{width:'100%',height:'100%'}}/> </div>
                <div id="tooltip" className={(showCartBuy) ? "cart-buy-course" :"cart-buy-course-hidden"} ref={setPopperElement} style={styles.popper} {...attributes.popper} onMouseEnter={()=>{setShowCartBuy(true);setShowCartIndex(0)}} onMouseLeave={()=>{setShowCartBuy(false)}}><CartBuy/><div id="arrow" ref={setArrowElement} style={styles.arrow} data-popper-arrow/></div>
        </div>
    )
}

export default SliderCart;