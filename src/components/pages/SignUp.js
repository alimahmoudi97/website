import React from 'react';
import './SignUp.css';

function SignUp() {
  return (
    <div className="sign-up-container">
        <div className="sign-up-detiales">
            <p style={{fontSize:16,fontWeight:'bold',marginLeft:10}}>Sign Up and Start Learning!</p>
            <div style={{borderBottom:'1px solid rgba(0,0,0,.25)'}}></div>
            <div style={{marginLeft:20}}>
                <div>
                    <input className="email-input" placeholder="Full name"/>
                    <input className="email-input" placeholder="email"/>
                    <input className="password-input" placeholder="password"/>
                    <div className="sign-up-conditions">
                        <input type="checkbox"/>
                        <p>Yes! I want to get the most out of Udemy by receiving emails with exclusive deals, personal recommendations and learning tips!</p>
                    </div>
                    <button className="button-login">Log In</button>
                    <div style={{display:'flex',justifyContent:'center'}}>
                        <p style={{fontSize:10}}>By signing up, you agree to our Terms of Use and Privacy Policy.</p>
                    </div>
                    
                </div>
                <div style={{borderBottom:'1px solid rgba(0,0,0,.25)',marginRight:10}}></div>
                <div style={{display:'flex',justifyContent:'center'}}>
                    <p>Already have an account? <a href="#">Log In</a></p>
                </div>
                
            </div>
            
        </div>
    </div>
  )
}

export default SignUp;