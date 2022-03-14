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
    const [popper,setPopper]=React.useState([]); 
    const navigationPrevRef = React.useRef(null);
    const navigationNextRef = React.useRef(null);
    const [showCartBuy,setShowCartBuy]=React.useState(false);
    const [showCartIndex,setShowCartIndex]=React.useState(0);
    const [referenceElement, setReferenceElement] = React.useState(null);
    const [popperElement, setPopperElement] = React.useState(null);
    const [referenceElement1, setReferenceElement1] = React.useState(null);
    const [popperElement1, setPopperElement1] = React.useState(null);
    const [referenceElement2, setReferenceElement2] = React.useState(null);
    const [popperElement2, setPopperElement2] = React.useState(null);
    const [referenceElement3, setReferenceElement3] = React.useState(null);
    const [popperElement3, setPopperElement3] = React.useState(null);
    const [referenceElement4, setReferenceElement4] = React.useState(null);
    const [popperElement4, setPopperElement4] = React.useState(null);
    const [referenceElement5, setReferenceElement5] = React.useState(null);
    const [popperElement5, setPopperElement5] = React.useState(null);
    const [arrowElement, setArrowElement] = React.useState(null);
    const [arrowElement1, setArrowElement1] = React.useState(null);
    const [arrowElement2, setArrowElement2] = React.useState(null);
    const [arrowElement3, setArrowElement3] = React.useState(null);
    const [arrowElement4, setArrowElement4] = React.useState(null);
    const [arrowElement5, setArrowElement5] = React.useState(null);
    const { styles, attributes } = usePopper(referenceElement, popperElement, {
      modifiers: [{ name: 'arrow', options: {element: arrowElement }}],placement:'right'
    });
    const st1=usePopper(referenceElement1, popperElement1, {
      modifiers: [{ name: 'arrow', options: {element: arrowElement1 }}],placement:'right'
    });
    const st2=usePopper(referenceElement2, popperElement2, {
      modifiers: [{ name: 'arrow', options: {element: arrowElement2 }}],placement:'right'
    });
    const st3=usePopper(referenceElement3, popperElement3, {
      modifiers: [{ name: 'arrow', options: {element: arrowElement3 }}],placement:'right'
    });
    const st4=usePopper(referenceElement4, popperElement4, {
      modifiers: [{ name: 'arrow', options: {element: arrowElement4 }}],placement:'right'
    });
    const st5=usePopper(referenceElement5, popperElement5, {
      modifiers: [{ name: 'arrow', options: {element: arrowElement5 }}],placement:'right'
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
                    {/* {arrayData.map((item,index)=>{return <SwiperSlide><div className="cart-course-slide" ref={setReferenceElement}  onMouseEnter={()=>{setShowCartBuy(true);setShowCartIndex(0)}} onMouseLeave={()=>{setShowCartBuy(false)}}><CartCourse/></div></SwiperSlide>})} */}
                    <SwiperSlide><div className="cart-course-slide" ref={setReferenceElement}  onMouseEnter={()=>{setShowCartBuy(true);setShowCartIndex(0)}} onMouseLeave={()=>{setShowCartBuy(false)}}><CartCourse/></div></SwiperSlide>
                    <SwiperSlide><div className="cart-course-slide" ref={setReferenceElement1}  onMouseEnter={()=>{setShowCartBuy(true);setShowCartIndex(1)}} onMouseLeave={()=>{setShowCartBuy(false)}}><CartCourse/></div></SwiperSlide>
                    <SwiperSlide><div className="cart-course-slide" ref={setReferenceElement2}  onMouseEnter={()=>{setShowCartBuy(true);setShowCartIndex(2)}} onMouseLeave={()=>{setShowCartBuy(false)}}><CartCourse/></div></SwiperSlide>
                    <SwiperSlide><div className="cart-course-slide" ref={setReferenceElement3}  onMouseEnter={()=>{setShowCartBuy(true);setShowCartIndex(3)}} onMouseLeave={()=>{setShowCartBuy(false)}}><CartCourse/></div></SwiperSlide>
                    <SwiperSlide><div className="cart-course-slide" ref={setReferenceElement4}  onMouseEnter={()=>{setShowCartBuy(true);setShowCartIndex(4)}} onMouseLeave={()=>{setShowCartBuy(false)}}><CartCourse/></div></SwiperSlide>
                    <SwiperSlide><div className="cart-course-slide" ref={setReferenceElement5}  onMouseEnter={()=>{setShowCartBuy(true);setShowCartIndex(5)}} onMouseLeave={()=>{setShowCartBuy(false)}}><CartCourse/></div></SwiperSlide>
                    <SwiperSlide><CartCourse/></SwiperSlide>
                    <SwiperSlide><CartCourse/></SwiperSlide>
                    <SwiperSlide><CartCourse/></SwiperSlide>
                    <SwiperSlide><CartCourse/></SwiperSlide>
                    <SwiperSlide><CartCourse/></SwiperSlide>
                    <SwiperSlide><CartCourse/></SwiperSlide>
                </Swiper>
                {/* <BsFillArrowRightCircleFill ref={navigationNextRef} style={{zIndex:1,backgroundColor:'red',width:50,height:50}}/> */}
                <div ref={navigationNextRef} style={{position:'relative',top:120,right:20,zIndex:1,width:50,height:50}} onClick={()=>{setOffsetCart(offsetCart+1);console.log(offsetCart)}}> <BsFillArrowRightCircleFill style={{width:'100%',height:'100%'}}/> </div>
                <div id="tooltip" className={(showCartIndex===0 && showCartBuy) ? "cart-buy-course" :"cart-buy-course-hidden"} ref={setPopperElement} style={styles.popper} {...attributes.popper} onMouseEnter={()=>{setShowCartBuy(true);setShowCartIndex(0)}} onMouseLeave={()=>{setShowCartBuy(false)}}><CartBuy/><div id="arrow" ref={setArrowElement} style={styles.arrow} data-popper-arrow/></div>
                <div id="tooltip" className={(showCartIndex===1 && showCartBuy) ? "cart-buy-course" :"cart-buy-course-hidden"} ref={setPopperElement1} style={st1.styles.popper} {...st1.attributes.popper} onMouseEnter={()=>{setShowCartBuy(true)}} onMouseLeave={()=>{setShowCartBuy(false)}}><CartBuy/><div id="arrow" ref={setArrowElement1} style={st1.styles.arrow} data-popper-arrow/></div>
                <div id="tooltip" className={(showCartIndex===2 && showCartBuy) ? "cart-buy-course" :"cart-buy-course-hidden"} ref={setPopperElement2} style={st2.styles.popper} {...st2.attributes.popper} onMouseEnter={()=>{setShowCartBuy(true)}} onMouseLeave={()=>{setShowCartBuy(false)}}><CartBuy/><div id="arrow" ref={setArrowElement2} style={st2.styles.arrow} data-popper-arrow/></div>
                <div id="tooltip" className={(showCartIndex===3 && showCartBuy) ? "cart-buy-course" :"cart-buy-course-hidden"} ref={setPopperElement3} style={st3.styles.popper} {...st3.attributes.popper} onMouseEnter={()=>{setShowCartBuy(true)}} onMouseLeave={()=>{setShowCartBuy(false)}}><CartBuy/><div id="arrow" ref={setArrowElement3} style={st3.styles.arrow} data-popper-arrow/></div>
                <div id="tooltip" className={(showCartIndex===4 && showCartBuy) ? "cart-buy-course" :"cart-buy-course-hidden"} ref={setPopperElement4} style={st4.styles.popper} {...st4.attributes.popper} onMouseEnter={()=>{setShowCartBuy(true)}} onMouseLeave={()=>{setShowCartBuy(false)}}><CartBuy/><div id="arrow" ref={setArrowElement4} style={st4.styles.arrow} data-popper-arrow/></div>
                <div id="tooltip" className={(showCartIndex===5 && showCartBuy) ? "cart-buy-course" :"cart-buy-course-hidden"} ref={setPopperElement5} style={st5.styles.popper} {...st5.attributes.popper} onMouseEnter={()=>{setShowCartBuy(true)}} onMouseLeave={()=>{setShowCartBuy(false)}}><CartBuy/><div id="arrow" ref={setArrowElement5} style={st5.styles.arrow} data-popper-arrow/></div>
        </div>
    )
}

export default SliderCart;