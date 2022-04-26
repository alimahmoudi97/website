import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import logo from './../../assets/logo-udemy.svg';
import { AiOutlineSearch } from "react-icons/ai";
import {GrCart} from 'react-icons/gr';
import Categories from './categories/categories';
import SearchHeader from './search/searchHeader';
import ItemsInCart from '../items-in-cart/ItemsInCart.js';
import{GrLanguage} from 'react-icons/gr';
import Badge from '@mui/material/Badge';
import { useSelector} from 'react-redux';
import './header.css';


function Header(){
    const count=useSelector(state=>state.counter.amountsOfCourses);
    const [isShowCartShopping,setShowCartShopping]=useState(false);
    return(
        <div className="header">
            <Link to="/">
                <div className="logo">
                    <img src={logo} alt="#"/>
                </div>
            </Link>
            <div className="div-categories">
                <Categories className="categories"/>
            </div>
            
            <SearchHeader/>
            
            <div className="group-button">

                    <div className="div-text-udemy-businuss">
                        <span>Udemy Businuss</span>
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
                        <span>Tech On Udemy</span>
                        <div className="udemy-businuss-header">
                            <div style={{border:'1px solid rgb(0,0,0,0.25)'}} className="udemy-businuss-header-container">
                                <div style={{width:'90%',margin:10}}>
                                    <p style={{fontSize:20,fontWeight:'bold'}}>Turn what you know into an opportunity and reach millions around the world.</p>
                                    <button>Learn more</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cart-shopping" onMouseEnter={()=>setShowCartShopping(true)} onMouseLeave={()=>setShowCartShopping(false)}>
                        <Badge badgeContent={count} color="primary">
                            <GrCart className="cart-shopping-icon"/>
                        </Badge>
                        
                        <div className="cart-shopping-review">
                            <ItemsInCart/>
                        </div>
                    </div>
                    <div className="button-header">
                        <div className="button">
                            
                            <Link to="login">
                                <button id="A" className="btn-login-header" type="button" title="name">Log in</button>
                            </Link>
                        </div>
                        <div className="button">
                            <Link to="signup">
                                <button id="B" className="btn-signup-header" type="button" title="name">Sign up</button>
                            </Link>
                        </div>
                        <div className="button">
                            <Link to="/">
                                <button id="C" className="btn-language" type="button" title="name"><GrLanguage/> </button>
                            </Link>
                            
                        </div>
                    </div>
              
            </div>
                       
        </div>

    )
}

export default Header;