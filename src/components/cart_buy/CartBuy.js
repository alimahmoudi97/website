import React from 'react';
import{BsHeart} from 'react-icons/bs';
import './CartBuy.css';

function CartBuy() {
  return (
    <div className="cart-buy-course">
        <div style={{marginLeft:20}}>
            <p style={{fontSize:20,marginBottom:0,fontWeight:'bold'}}>
                Learning Python for Data Analysis and Visualtion
            </p>
            <div style={{display:'flex'}}>
                {/* <p style={{backgroundColor:'yellowgreen',width:70,textAlign:'center',padding:4}}>Besteller</p> */}
                <div style={{marginTop:10}}><span style={{backgroundColor:'yellowgreen',width:70,textAlign:'center',padding:4,fontSize:14}}>Besteller</span> <span style={{color:'rgb(23, 120, 45)',fontSize:12,fontWeight:'bold'}}>Updated</span> <span style={{color:'rgb(7,112,50)',fontSize:12,fontWeight:'bold'}}>September 2019</span></div>
            </div>
            <p style={{fontSize:12}}>
                All Level . Subtitles
            </p>
            <p>
                Learn python and how to use it to analyze,visualize and present data. Includes tons of sample code and hours of video!
            </p>
            <div style={{display:'flex'}}>
                <span>
                    &#10003;
                </span>
                <span style={{marginLeft:10}}>
                    Have an intermediate skill level of Python programming.
                </span>
            </div>
            <div style={{display:'flex',margin:0}}>
                <span>
                    &#10003;
                </span>
                <span style={{marginLeft:10}}>
                    Have an intermediate skill level of Python programming.
                </span>
            </div>
            <div style={{display:'flex'}}>
                <span>
                    &#10003;
                </span>
                <span style={{marginLeft:10}}>
                    Have an intermediate skill level of Python programming.
                </span>
            </div>
            <div style={{display:'flex',height:50,marginBottom:10,marginTop:20}}>
                <button className="btn-add-to-cart">Add to cart</button>
                <div className="heart-icon-cart"><BsHeart style={{width:30,height:30}}/></div>
            </div>
        </div>
    </div>
  )
}
export default CartBuy;