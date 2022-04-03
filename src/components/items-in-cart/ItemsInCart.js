import React from 'react';
import './ItemsInCart.css';
function ItemsInCart() {
  const data=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
  
  return (
    <div className="items-in-cart-container">
      <div className="items-in-cart-list">
        {
          data.map((value,index)=>{
            return(
                  <div style={{display:'flex'}}>
                  <div>
                    <img style={{width:80,height:80}} src="https://wallpapercave.com/wp/wp6124215.jpg"/>
                  </div>
                  <div className="items-in-cart-details">
                    <p>course name</p>
                    <p>arturs</p>
                    <p>price</p>
                  </div>
                </div>
            );
          })
        }
      </div>
      <div className="items-in-cart-prices">
        <div  className="items-in-cart-prices-section">
          <p style={{fontSize:16}}>Total:95.99$</p>
          <button style={{width:'100%',height:40,backgroundColor:'black',color:'white',fontSize:16}}>Go to cart</button>
        </div>
      </div>
    </div>
  )
}

export default ItemsInCart;