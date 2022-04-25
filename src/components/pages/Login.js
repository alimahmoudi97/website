import React from 'react';
import {BsFacebook,BsGoogle,BsApple} from 'react-icons/bs';
import{MdOutlineEmail} from 'react-icons/md';
import{RiLockPasswordLine} from 'react-icons/ri';
import './Login.css';

function Login() {
  return (
    <div className="login-container">
        <div className="login-detiales">
            <p style={{fontSize:16,fontWeight:'bold',marginLeft:10}}>Log In to Your Udemy Account!</p>
            <div style={{borderBottom:'1px solid rgba(0,0,0,.25)'}}></div>
            <div style={{display:'flex',justifyContent:'center'}}>
                <div style={{width:'90%'}}>
                    <div className="facebook-login-button"><BsFacebook className="facebook-icon-login"/><p>Continue with Facebook</p></div>
                    <div className="google-login-button"><BsGoogle className="google-icon-login"/><p>Continue with Google</p></div>
                    <div className="apple-login-button"><BsApple className="apple-icon-login"/><p>Continue with Apple</p></div>
                    <div className="inputs-container">
                      <div className="email-input-container">
                        <MdOutlineEmail  className="email-login-icon"/>
                        <input className="email-input" placeholder="Email"/>
                      </div>
                      <div className="password-input-container">
                        <RiLockPasswordLine className="password-login-icon"/>
                        <input className="password-input" placeholder="Password"/>
                      </div>
                        
                    </div>
                    <form>
                    <div className="button-login-container"><button className="button-login">Log In</button></div>
                      <span className="forget-password" style={{marginBottom:15}}><a href="#">Forget Password</a></span>
                      <span className="forget-password"><div>Do you have a account</div><a href="#">Sign Up</a></span>
                      <span className="forget-password"><a href="#">Log in with your organization</a></span>
                    </form>
                    
                </div>

            </div>
            
        </div>
        
    </div>
  )
}

export default Login;