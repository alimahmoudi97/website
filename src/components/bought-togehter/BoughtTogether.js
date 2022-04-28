import React from 'react';
import './BoughtTogether.css';
import BoughtTogetherCart from './BoughtTogetherCart';

function BoughtTogether() {
  return (
    <div className="bought-together-container">
        <div style={{border:'1px solid',borderColor:'#d1d7dc',width:'33%',padding:20}}>
            <h2>Bought Together</h2>
            <div>
                <BoughtTogetherCart/>
                <BoughtTogetherCart/>
                <BoughtTogetherCart/>
            </div>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
              <span style={{fontSize:18}}>
                Total:&euro;23.98 &nbsp;
                <span style={{textDecoration:"line-through"}}>
                  &euro;46.98
                </span>
              </span>
              <button className="btn-bought-together">
                Add all to cart
              </button>
            </div>
        </div>
        
    </div>
  )
}

export default BoughtTogether;