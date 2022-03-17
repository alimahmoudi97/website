import React from 'react';
import './categories.css';

import CartCategories from './cartCategories';

export const ContextCategories=React.createContext(null);

function Categories(){
    const[isHoverSubOne,serHoverSubOne]=React.useState(true);
    const[isHoverSubTwo,serHoverSubTwo]=React.useState(true);
    const[isHoverSubThree,setHoverSubThree]=React.useState(false);
    return(
        <ContextCategories.Provider value={{subOne:[isHoverSubOne,serHoverSubOne],subTwo:[isHoverSubTwo,serHoverSubTwo],subThree:[isHoverSubThree,setHoverSubThree]}}>
            <div id="A" onMouseEnter={()=>{setHoverSubThree(false);document.getElementById("A").style.setProperty('--display-block','block')}}>
                <p className="categories">
                    Categories
                    <div className="cart">
                        <CartCategories/>
                    </div>
                </p>  
            </div>
        </ContextCategories.Provider>
        
    )
}

export default Categories;