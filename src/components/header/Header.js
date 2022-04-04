import React,{useState} from 'react';
import logo from './../../assets/logo-udemy.svg';
import { AiOutlineSearch } from "react-icons/ai";
import {GrCart} from 'react-icons/gr';
import Categories from './categories/categories';
import SearchHeader from './search/searchHeader';
import ItemsInCart from '../items-in-cart/ItemsInCart.js';
import './header.css';
function Header(){
    const [isShowCartShopping,setShowCartShopping]=useState(false);
    return(
        <div className="header">
            <div className="logo">
                <img src={logo} alt="#"/>
            </div>
            <div className="div-categories">
                <Categories className="categories"/>
            </div>
            
            <SearchHeader/>
            
            <div className="group-button">

                    <div className="div-text-udemy-businuss">
                        <p>Udemy Businuss</p>
                        <div className="udemy-businuss-header">
                            <div className="udemy-businuss-header-container">
                                <div style={{width:'90%',margin:10}}>
                                    <p style={{fontSize:20,fontWeight:'bold'}}>Get your team access to over 6,000 top Udemy courses, anytime, anywhere.</p>
                                    <button>Try Udemy Business</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="div-text-udemy-tech">
                        <p>Tech On Udemy</p>
                        <div className="udemy-businuss-header">
                            <div className="udemy-businuss-header-container">
                                <div style={{width:'90%',margin:10}}>
                                    <p style={{fontSize:20,fontWeight:'bold'}}>Turn what you know into an opportunity and reach millions around the world.</p>
                                    <button>Learn more</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cart-shopping" onMouseEnter={()=>setShowCartShopping(true)} onMouseLeave={()=>setShowCartShopping(false)}>
                       <GrCart className="cart-shopping-icon" style={{width:50,height:25}}/>
                       <div className="cart-shopping-review">
                           <ItemsInCart/>
                       </div>
                    </div>
                
                    <div className="button">
                        <button id="A" type="button" title="name">Log in</button>
                    </div>
                    <div className="button">
                        <button id="B" type="button" title="name">Sign up</button>
                    </div>
                    <div className="button">
                        <button id="C" type="button" title="name"> <img src={logo} alt="#"/> </button>
                    </div>
            </div>
                       
        </div>

    )
}

export default Header;