import React from 'react';
import './cartCategories.css';

import {ContextCategories} from './categories';

function CategoriesSubOne(){
    const {subOne,subTwo,subThree}=React.useContext(ContextCategories);
    const[isHoverSubTwo,serHoverSubTwo]=subTwo;
    const[isHoverSubThree,serHoverSubThree]=subThree;
    return(
        
            <ul onMouseEnter={()=>{if(isHoverSubThree){serHoverSubThree(false)}}}>
                <li>Ali</li>
                <li>Ali</li>
                <li>Ali</li>
                <li>Ali</li>
                <li>Ali</li>
            </ul>
        
    )
}
function CategoriesSubTwo(){
    const {subOne,subTwo,subThree}=React.useContext(ContextCategories);
    const[isHoverSubTwo,serHoverSubTwo]=subTwo;
    const[isHoverSubThree,serHoverSubThree]=subThree;
    return(
        
            <ul >
                <li onMouseEnter={()=>serHoverSubThree(true)}>Ali-1</li>
                <li>Ali-2</li>
                <li>Ali-3</li>
                <li>Ali-4</li>
                <li>Ali-5</li>
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