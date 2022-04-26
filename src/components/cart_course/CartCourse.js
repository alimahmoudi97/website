import React from 'react';
import Rating from '@mui/material/Rating';
import './Cart.css';
import { Link } from 'react-router-dom';

function CartCourse(){
    return(
        <Link to="coursedetails" style={{ textDecoration: 'none',color: 'inherit' }}>
            <div className="container-cart-course">
                <img src="https://www.thinkific.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2016/06/Create-Online-Courses-10.jpg.webp" alt="#"/>
                <div className="cart-course-title">
                    <h5 style={{margin:0}}>
                        <a>Learning Python for Data Analysis and Visualization</a>
                    </h5>
                </div>
                <div className="cart-course-instuctors">
                    <span style={{margin:0,fontWeight:'lighter',fontSize:12}}>Ali Mahmoudi</span>
                </div>
                <div className="cart-course-rating">
                    <span className="cart-course-score">Score</span>
                    <Rating
                        name='simple-controlled'
                        value={2.5}
                        precision={0.5}
                        size="small"
                        style={{marginTop:4}}
                    />
                    <span className="cart-course-rating-student">
                        (10,000)
                    </span>
                </div>
                <div className="cart-course-price">
                    <span>&euro;95.99</span>
                </div>
            </div>
        </Link>
    );
}

export default CartCourse;