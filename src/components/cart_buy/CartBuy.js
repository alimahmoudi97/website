import React from 'react';
import './CartBuy.css';

function CartBuy() {
  return (
    <div className="cart-buy-course">
        <div style={{marginLeft:20}}>
            <p style={{fontSize:20,marginBottom:0,fontWeight:'bold'}}>
                Learning Python for Data Analysis and Visualtion
            </p>
            <div style={{display:'flex'}}>
                <p style={{backgroundColor:'yellowgreen',width:70,textAlign:'center',padding:4}}>Besteller</p>
                <p style={{marginLeft:10,padding:4,color:`rgb(23, 120, 45)`}}>Updated September 2019</p>
            </div>
            <p>
                All Level . Subtitles
            </p>
            <p>
                Learn python and how to use it to analyze,visualize and present data. Includes tons of sample code and hours of video!
            </p>
            <div style={{display:'flex'}}>
                <p>
                    &#10003;
                </p>
                <p style={{marginLeft:10}}>
                    Have an intermediate skill level of Python programming.
                </p>
            </div>
            <div style={{display:'flex',margin:0}}>
                <p>
                    &#10003;
                </p>
                <p style={{marginLeft:10}}>
                    Have an intermediate skill level of Python programming.
                </p>
            </div>
            <div style={{display:'flex'}}>
                <p>
                    &#10003;
                </p>
                <p style={{marginLeft:10}}>
                    Have an intermediate skill level of Python programming.
                </p>
            </div>
            <div style={{display:'flex',height:50}}>
                <button style={{backgroundColor:`rgb(152, 20, 252)`,width:'70%'}}>Add to cart</button>
                <button style={{marginLeft:10}}>Like</button>
            </div>
        </div>
    </div>
  )
}
export default CartBuy;