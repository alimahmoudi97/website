import React from 'react';
import './Footer.css';


const gridItem1=["Udemy Business","Teach on Udemy","Get the app","About us","contact us"];
const gridItem2=["Careers","Blog","Help and Support","Affiliate","Investors"];
const gridItem3=["Terms","Privacy policy","Cookie setting","Sitemap","Accessiblity statement"];
function FooterItem(props){
    return(
        <div>
            <p>
                <a href="#">
                   {props.Item[0]}
                </a>
            </p>
            <p>
                <a href="#">
                   {props.Item[1]}
                </a>
            </p>
            <p>
                <a href="#">
                   {props.Item[2]}
                </a>
            </p>
            <p>
                <a href="#">
                   {props.Item[3]}
                </a>
            </p>
            <p>
                <a href="#">
                   {props.Item[4]}
                </a>
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
                    <div className="Footer-item-grid"><FooterItem Item={gridItem1}/></div>
                    <div className="Footer-item-grid"><FooterItem Item={gridItem2}/></div>
                    <div className="Footer-item-grid"><FooterItem Item={gridItem3}/></div>
                </div>
                <div className="btn-footer">
                    <button>English</button>
                </div>
                
            </div>
            <div style={{display:'flex',justifyContent:'space-between',marginTop:30}}>
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
