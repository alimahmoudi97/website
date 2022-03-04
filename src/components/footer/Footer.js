import React from 'react';
import './Footer.css';
function FooterItem(){
    return(
        <div>
            <p>
                Udemy Business
            </p>
            <p>
                Udemy Business
            </p>
            <p>
                Udemy Business
            </p>
            <p>
                Udemy Business
            </p>
            <p>
                Udemy Business
            </p>
        </div>
    )
}
function Footer() {
  return (
      <div className="Footer-container">
          <div style={{marginLeft:30,marginRight:30}}>
            <div style={{display:'flex',justifyContent:'space-between'}}>
                <div className="Footer-container-grid">
                    <div className="Footer-item-grid"><FooterItem/></div>
                    <div className="Footer-item-grid"><FooterItem/></div>
                    <div className="Footer-item-grid"><FooterItem/></div>
                </div>
                <div className="btn-footer">
                    <button>English</button>
                </div>
                
            </div>
            <div style={{display:'flex',justifyContent:'space-between'}}>
                <img style={{width:100,height:50}} src="https://cdn.freelogovectors.net/wp-content/uploads/2021/08/udemylogo-freelogovectors.net_.png"/>
                <p>
                    © 2022 Udemy, Inc.
                </p>
            </div>
        </div>
      </div>
  )
}

export default Footer;
