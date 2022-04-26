import React from 'react';
import{MdOutlineEmail} from 'react-icons/md';
import{RiLockPasswordLine} from 'react-icons/ri';
import{BsFillPersonFill} from 'react-icons/bs';
import './SignUp.css';

function SignUp() {
  return (
    <div className="sign-up-container">
        <div className="sign-up-detiales">
            <p style={{fontSize:16,fontWeight:'bold',marginLeft:10}}>Sign Up and Start Learning!</p>
            <div style={{borderBottom:'1px solid rgba(0,0,0,.25)'}}></div>
            <div style={{marginLeft:20,width:'90%'}}>
                <div>
                    <div className="inputs-container">
                        <div className="email-input-container">
                            <BsFillPersonFill  className="email-login-icon"/>
                            <input className="email-input" placeholder="Full name"/>
                        </div>
                      <div className="email-input-container">
                        <MdOutlineEmail  className="email-login-icon"/>
                        <input className="email-input" placeholder="Email"/>
                      </div>
                      <div className="password-input-container">
                        <RiLockPasswordLine className="password-login-icon"/>
                        <input className="password-input" placeholder="Password"/>
                      </div>
                        
                    </div>
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