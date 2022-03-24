import React,{useState} from 'react';
import './Description.css';
function Description() {

    const [isShowMore,setShowMore]=useState(true);

  return (
    <div className="description-container">
        <div style={{width:'35%'}}>
            <p style={{fontWeight:'bold',fontSize:20}}>Description</p>
            <div className="description-contents">
                <p>Do you want to become a programmer? Do you want to learn how to create games, automate your browser, visualize data, and much more?

                If you’re looking to learn Python for the very first time or need a quick brush-up, this is the course for you!

                Python has rapidly become one of the most popular programming languages around the world. Compared to other languages such as Java or C++, Python consistently outranks and outperforms these languages in demand from businesses and job availability. The average Python developer makes over $100,000 - this number is only going to grow in the coming years.

                The best part? Python is one of the easiest coding languages to learn right now. It doesn’t matter if you have no programming experience or are unfamiliar with the syntax of Python. By the time you finish this course, you'll be an absolute pro at programming!
                Do you want to become a programmer? Do you want to learn how to create games, automate your browser, visualize data, and much more?

                If you’re looking to learn Python for the very first time or need a quick brush-up, this is the course for you!

                Python has rapidly become one of the most popular programming languages around the world. Compared to other languages such as Java or C++, Python consistently outranks and outperforms these languages in demand from businesses and job availability. The average Python developer makes over $100,000 - this number is only going to grow in the coming years.

                The best part? Python is one of the easiest coding languages to learn right now. It doesn’t matter if you have no programming experience or are unfamiliar with the syntax of Python. By the time you finish this course, you'll be an absolute pro at programming!
                </p>
                {
                    (isShowMore) ? <div className="fade-bottom-contents"/> :null
                }
            </div>
            <div>
                {
                    (isShowMore) ?
                    <button style={{position:'relative',Top:20}} onClick={()=>{setShowMore(false);document.documentElement.style.setProperty("--max-height-contents","100%");document.documentElement.style.setProperty("--overflow-contents","visibale")}}>Show More</button>
                    :
                    <button style={{position:'relative',Top:20}} onClick={()=>{setShowMore(true);document.documentElement.style.setProperty("--max-height-contents","250px");document.documentElement.style.setProperty("--overflow-contents","hidden")}}>Show Less</button>
                }
                
            </div>
        </div>
        
    </div>
  )
}

export default Description;