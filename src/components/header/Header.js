import React from 'react';
import logo from './../../assets/logo-udemy.svg';
import { AiOutlineSearch } from "react-icons/ai";
import Categories from './categories/categories';
import SearchHeader from './search/searchHeader';
import './header.css';
function Header(){
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

                    <div className="div-text">
                        <p>Udemy Businuss</p>
                    </div>
                    <div className="div-text">
                        <p>Tech On Udemy</p>
                    </div>
                    <div className="cart-shopping">
                        <img style={{width:50,height:50}} src={logo} alt="#"/>
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