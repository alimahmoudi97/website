import React from 'react';
import './Introduce.css'
function Introduce(){
    return(
        <div className="introduce">
            <img style={{width:'70%',height:400}} src="https://img-c.udemycdn.com/notices/web_banner/slide_1_image_udlite/db24b94e-d190-4d5a-b1dd-958f702cc8f5.jpg" alt="#"/>
            <div className="introudction-text">
                <h1> Learning that gets you </h1>
                <h3>Skills for your present (and your future). Get started with us.</h3>
            </div>
        </div>
    )
}

export default Introduce;