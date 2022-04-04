import React from 'react';
import {BsFacebook,BsGoogle,BsApple} from 'react-icons/bs';
import './Login.css';

function Login() {
  return (
    <div className="login-container">
        <div className="login-detiales">
            <p style={{fontSize:16,fontWeight:'bold',marginLeft:10}}>Log In to Your Udemy Account!</p>
            <div style={{borderBottom:'1px solid rgba(0,0,0,.25)'}}></div>
            <div style={{display:'flex',justifyContent:'center'}}>
                <div>
                    <div className="facebook-login-button"><BsFacebook className="facebook-icon-login"/><p>Continue with Facebook</p></div>
                    <div className="google-login-button"><BsGoogle className="google-icon-login"/><p>Continue with Google</p></div>
                    <div className="apple-login-button"><BsApple className="apple-icon-login"/><p>Continue with Apple</p></div>
                    <input className="email-input" placeholder="email"/>
                    <input className="password-input" placeholder="password"/>
                    <button className="button-login">Log In</button>
                    <p className="forget-password"><a href="#">Forget Password</a></p>
                    <p className="forget-password"><div>Do you have a account</div><a href="#">Sign Up</a></p>
                    <p className="forget-password"><a href="#">Log in with your organization</a></p>
                </div>

            </div>
            
        </div>
        
    </div>
  )
}

export default Login;