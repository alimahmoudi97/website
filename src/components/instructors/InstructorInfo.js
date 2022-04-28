import React,{useState} from 'react';
import{MdKeyboardArrowDown} from 'react-icons/md';
import './InstructorInfo.css';

function InstructorInfo() {
    const [isShowMore,setShowMore]=useState(true);
  return (
    <div className="instructor-info-container">
        <div className="instructor-info-title">
            <a href='#' className="instructor-name">Avanish John</a>
            <span className="instructor-position">CEO of TheCodex.me - Teaching 500,000+ Students how to code</span>
        </div>

        <div className="avatar-info">
            <div>
                <img style={{height:'inherit'}}  className="avatar-image" src="https://img-b.udemycdn.com/user/200_H/10260436_946b_6.jpg"/>
            </div>
            <div style={{marginLeft:10}}>
                <p>4.3 Instructor Rating</p>
                <p>70,214 Reviews</p>
                <p>830,237 Students</p>
                <p>16 Courses</p>
            </div>
        </div>
        <div className="description-contents-avatar-info">
            <p>Avinash Jain is currently a senior at UC Berkeley majoring in Electrical Engineering and Computer Science. He's the CEO and Founder of TheCodex, an online educational platform focused on bringing the best programming content to hundreds of thousands of students around the world.

                His programming journey began at the age of 10, starting off with simple Python scripts to crawl the weather. Since then, he's worked at numerous companies and is professionally experienced in Python, iOS Development and Web Development. He's launched a plethora of applications in the App Store amassing thousands of downloads. Additionaly, he's competed and won in several hackathons around the world including PennApps and NWHacks.

                Avinash has a passion to teach - his enthusiasm and love for programming is evident in every video. For the past 4 years he's been an instructor on Udemy and he loves motivating and enabling others to pursue their programming dreams. He hopes to help students realize the power of programming and jumpstart their careers through his courses.

                Checkout TheCodex for all of his courses, fantastic discounts, and any guidance or help. 
            </p>
            {
                    (isShowMore) ? <div className="fade-bottom-contents-instructors"/> :null
            }
        </div>
        <div>
                {
                    (isShowMore) ?

                    <div className="show-content-description-buttom"
                    onClick={()=>{
                        setShowMore(false);
                        document.documentElement.style.setProperty("--max-height-contents-instructors","100%");
                        document.documentElement.style.setProperty("--overflow-contents-instructors","visibale")
                    }}
                    >
                        <span>
                            Show More
                        </span>
                        <MdKeyboardArrowDown style={{width:20,height:20}}/>
                    </div>

                    :
                    <div className="show-content-description-buttom" 
                        onClick={()=>{
                            setShowMore(true);
                            document.documentElement.style.setProperty("--max-height-contents-instructors","150px");
                            document.documentElement.style.setProperty("--max-height-contents-instructors","hidden")
                        }}
                        >
                            <span>
                                Show Less
                            </span>
                            <MdKeyboardArrowDown style={{width:20,height:20}}/>
                    </div>
                }
            </div>
    </div>
  )
}

export default InstructorInfo;