import React from 'react';
import './BoughtTogether.css';
import BoughtTogetherCart from './BoughtTogetherCart';

function BoughtTogether() {
  return (
    <div className="bought-together-container">
        <div style={{border:'1px solid',width:'35%',marginTop:20}}>
            <p style={{fontWeight:'bold',marginLeft:30,fontSize:20}}>Bought Together</p>
            <div>
                <BoughtTogetherCart/>
                <BoughtTogetherCart/>
                <BoughtTogetherCart/>
            </div>
        </div>
        
    </div>
  )
}

export default BoughtTogether;