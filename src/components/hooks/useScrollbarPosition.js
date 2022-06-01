import { useState,useEffect } from "react";

function useScrollbarPosition(){
    const[scrollPosition,setScrollPosition]=useState(0);

    const handleScroll=()=>{
        const position=window.scrollY;
        setScrollPosition(position);
    }

    useEffect(()=>{
        window.addEventListener('scroll',handleScroll,{passive:true});

        return ()=>{
            window.removeEventListener('scroll',handleScroll);
        }
    },[]);

    return scrollPosition;
}

export default useScrollbarPosition;
