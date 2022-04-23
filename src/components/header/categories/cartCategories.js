import React from 'react';
import './cartCategories.css';

import {ContextCategories} from './categories';

function CategoriesSubOne(){
    const {subOne,subTwo,subThree}=React.useContext(ContextCategories);
    const[isHoverSubTwo,serHoverSubTwo]=subTwo;
    const[isHoverSubThree,serHoverSubThree]=subThree;
    const[isActiveItemSubOne,setActiveItemSubOne]=React.useState(-1);
    return(
        
            <ul className="list-categories-sub-one" onMouseEnter={()=>{if(isHoverSubThree){serHoverSubThree(false)}}}>
                <li className={"title-categories-item "+((isActiveItemSubOne===0) ? "active-title-item" :"")} onMouseEnter={()=>setActiveItemSubOne(0)}>
                    <div><span>Devolopment</span></div>
                    <div><span>&gt;</span></div>
                </li>
                <li className={"title-categories-item "+((isActiveItemSubOne===1) ? "active-title-item" :"")} onMouseEnter={()=>setActiveItemSubOne(1)}>
                    <div><span>Business</span></div>
                    <div><span>&gt;</span></div>
                </li>
                <li className={"title-categories-item "+((isActiveItemSubOne===2) ? "active-title-item" :"")} onMouseEnter={()=>setActiveItemSubOne(2)}>
                    <div><span>Finance & Accounting</span></div>
                    <div><span>&gt;</span></div>
                </li>
                <li className={"title-categories-item "+((isActiveItemSubOne===3) ? "active-title-item" :"")} onMouseEnter={()=>setActiveItemSubOne(3)}>
                    <div><span>It & Software</span></div>
                    <div><span>&gt;</span></div>
                </li>
                <li className={"title-categories-item "+((isActiveItemSubOne===4) ? "active-title-item" :"")} onMouseEnter={()=>setActiveItemSubOne(4)}>
                    <div><span>Office Productivity</span></div>
                    <div><span>&gt;</span></div>
                </li>
                <li className={"title-categories-item "+((isActiveItemSubOne===5) ? "active-title-item" :"")} onMouseEnter={()=>setActiveItemSubOne(5)}>
                    <div><span>Personal Development</span></div>
                    <div><span>&gt;</span></div>
                </li>
                <li className={"title-categories-item "+((isActiveItemSubOne===6) ? "active-title-item" :"")} onMouseEnter={()=>setActiveItemSubOne(6)}>
                    <div><span>Design</span></div>
                    <div><span>&gt;</span></div>
                </li>
                <li className={"title-categories-item "+((isActiveItemSubOne===7) ? "active-title-item" :"")} onMouseEnter={()=>setActiveItemSubOne(7)}>
                    <div><span>Marketing</span></div>
                    <div><span>&gt;</span></div>
                </li>
                <li className={"title-categories-item "+((isActiveItemSubOne===8) ? "active-title-item" :"")} onMouseEnter={()=>setActiveItemSubOne(8)}>
                    <div><span>Lifestyle</span></div>
                    <div><span>&gt;</span></div>
                </li>
                <li className={"title-categories-item "+((isActiveItemSubOne===9) ? "active-title-item" :"")} onMouseEnter={()=>setActiveItemSubOne(9)}>
                    <div><span>Photography and Video</span></div>
                    <div><span>&gt;</span></div>
                </li>
                <li className={"title-categories-item "+((isActiveItemSubOne===10) ? "active-title-item" :"")} onMouseEnter={()=>setActiveItemSubOne(10)}>
                    <div><span>Health & Fitness</span></div>
                    <div><span>&gt;</span></div>
                </li>
                <li className={"title-categories-item "+((isActiveItemSubOne===11) ? "active-title-item" :"")} onMouseEnter={()=>setActiveItemSubOne(11)}>
                    <div><span>Music</span></div>
                    <div><span>&gt;</span></div>
                </li>
                <li className={"title-categories-item "+((isActiveItemSubOne===12) ? "active-title-item" :"")} onMouseEnter={()=>setActiveItemSubOne(12)}>
                    <div><span>Teaching & Acadimics</span></div>
                    <div><span>&gt;</span></div>
                </li>
            </ul>
    )
}
function CategoriesSubTwo(){
    const {subOne,subTwo,subThree}=React.useContext(ContextCategories);
    const[isHoverSubTwo,serHoverSubTwo]=subTwo;
    const[isHoverSubThree,serHoverSubThree]=subThree;
    const[isActiveItemSubTwo,setActiveItemSubTwo]=React.useState(-1);
    return(
        
            <ul>
                <li className={"title-categories-item "+((isActiveItemSubTwo===0) ? "active-title-item" :"")} onMouseEnter={()=>{serHoverSubThree(true);setActiveItemSubTwo(0)}}>
                    <div><span>Web Development</span></div>
                    <div><span>&gt;</span></div>
                </li>
                <li className={"title-categories-item "+((isActiveItemSubTwo===1) ? "active-title-item" :"")} onMouseEnter={()=>setActiveItemSubTwo(1)}>
                    <div><span>Data Science</span></div>
                    <div><span>&gt;</span></div>
                </li>
                <li className={"title-categories-item "+((isActiveItemSubTwo===2) ? "active-title-item" :"")} onMouseEnter={()=>setActiveItemSubTwo(2)}>
                    <div><span>Mobile Development</span></div>
                    <div><span>&gt;</span></div>
                </li>
                <li className={"title-categories-item "+((isActiveItemSubTwo===3) ? "active-title-item" :"")} onMouseEnter={()=>setActiveItemSubTwo(3)}>
                    <div><span>Programming Languages</span></div>
                    <div><span>&gt;</span></div>
                </li>
                <li className={"title-categories-item "+((isActiveItemSubTwo===4) ? "active-title-item" :"")} onMouseEnter={()=>setActiveItemSubTwo(4)}>
                    <div><span>Game Development</span></div>
                    <div><span>&gt;</span></div>
                </li>
                <li className={"title-categories-item "+((isActiveItemSubTwo===5) ? "active-title-item" :"")} onMouseEnter={()=>setActiveItemSubTwo(5)}>
                    <div><span>Database Design & Development</span></div>
                    <div><span>&gt;</span></div>
                </li>
                <li className={"title-categories-item "+((isActiveItemSubTwo===6) ? "active-title-item" :"")} onMouseEnter={()=>setActiveItemSubTwo(6)}>
                    <div><span>Software Testing</span></div>
                    <div><span>&gt;</span></div>
                </li>
                <li className={"title-categories-item "+((isActiveItemSubTwo===7) ? "active-title-item" :"")} onMouseEnter={()=>setActiveItemSubTwo(7)}>
                    <div><span>Software Engineering</span></div>
                    <div><span>&gt;</span></div>
                </li>
                <li className={"title-categories-item "+((isActiveItemSubTwo===8) ? "active-title-item" :"")} onMouseEnter={()=>setActiveItemSubTwo(8)}>
                    <div><span>Software Development Tools</span></div>
                    <div><span>&gt;</span></div>
                </li>
                <li className={"title-categories-item "+((isActiveItemSubTwo===9) ? "active-title-item" :"")} onMouseEnter={()=>setActiveItemSubTwo(9)}>
                    <div><span>No-Code Development</span></div>
                    <div><span>&gt;</span></div>
                </li>
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