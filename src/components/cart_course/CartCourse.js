import React from 'react';
import Rating from '@mui/material/Rating';
import './Cart.css';

function CartCourse(){
    return(
        <div className="container">
            <img src="https://www.thinkific.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2016/06/Create-Online-Courses-10.jpg.webp" alt="#"/>
            <p>
                Learning Python for Data Analysis and Visualization
            </p>
            <p>Score</p>
            <Rating
                name='simple-controlled'
                value={2.5}
                precision={0.5}
            />
        </div>
    );
}

export default CartCourse;