import React from 'react';
import './cartCategories.css';

import {ContextCategories} from './categories';

function CategoriesSubOne(){
    const {subOne,subTwo,subThree}=React.useContext(ContextCategories);
    const[isHoverSubTwo,serHoverSubTwo]=subTwo;
    const[isHoverSubThree,serHoverSubThree]=subThree;
    return(
        
            <ul onMouseEnter={()=>{if(isHoverSubThree){serHoverSubThree(false)}}}>
                <li><p>Devolopment</p></li>
                <li><p>Business</p></li>
                <li><p>Finance & Accounting</p></li>
                <li><p>It & Software</p></li>
                <li><p>Office Productivity</p></li>
                <li><p>Personal Development</p></li>
                <li><p>Design</p></li>
                <li><p>Marketing</p></li>
                <li><p>Lifestyle</p></li>
                <li><p>Photography and Video</p></li>
                <li><p>Health & Fitness</p></li>
                <li><p>Music</p></li>
                <li><p>Teaching & Acadimics</p></li>
            </ul>
        
    )
}
function CategoriesSubTwo(){
    const {subOne,subTwo,subThree}=React.useContext(ContextCategories);
    const[isHoverSubTwo,serHoverSubTwo]=subTwo;
    const[isHoverSubThree,serHoverSubThree]=subThree;
    return(
        
            <ul >
                <li onMouseEnter={()=>serHoverSubThree(true)}><p>Web Development</p></li>
                <li><p>Data Science</p></li>
                <li><p>Mobile Development</p></li>
                <li><p>Programming Languages</p></li>
                <li><p>Game Development</p></li>
                <li><p>Database Design & Development</p></li>
                <li><p>Software Testing</p></li>
                <li><p>Software Engineering</p></li>
                <li><p>Software Development Tools</p></li>
                <li><p>No-Code Development</p></li>
            </ul>
        
    )
}
function CategoriesSubThree(){
    const {subOne,subTwo,subThree}=React.useContext(ContextCategories);
    const[isHoverSubTwo,serHoverSubTwo]=subTwo;
    const[isHoverSubThree,serHoverSubThree]=subThree;
    return(
        
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
            </ul>
        
    )
}

function CartCategories(){

    const {subOne,subTwo,subThree}=React.useContext(ContextCategories);
    const[isHoverSubOne,serHoverSubOne]=subOne;
    const[isHoverSubTwo,serHoverSubTwo]=subTwo;
    const[isHoverSubThree,serHoverSubThree]=subThree;

    
    

    return(

            
                <div className="categories-subs" >

                    { 
                        isHoverSubOne && <div className="categorie-sub-two"> <CategoriesSubOne/> </div> 
                    }
                    {
                        isHoverSubTwo && <div className="categorie-sub-two"> <CategoriesSubTwo/> </div> 
                    }
                    {
                        isHoverSubThree && <div className="categorie-sub-two"> <CategoriesSubThree/> </div> 
                    }
                    
                </div>

    )
}

export default CartCategories;
// export {ContextCategories};