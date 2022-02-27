import React from 'react';
import './Courses.css';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Slider from './../slider/Slider';

function TabPanel(props){

    const {childern,value,index}=props;

    return(
        <div hidden={value!==index}>
            {value === index && (
                <div>
                    <Box sx={{ p: 3}}>
                        <p style={{fontSize:20}}>
                            Expand your career opportunities with Python
                        </p>
                        <p>
                            Take one of Udemy’s range of Python courses and learn how to code using this incredibly useful language. Its simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. You’ll learn how to build everything from games to sites to apps. Choose from a range of courses that will appeal to
                        </p>
                        
                    </Box>

                    <div style={{paddingLeft:22}}>
                        <button style={{height:40}}>Python</button>
                    </div>
                    
                    <Box sx={{ p: 3}}>
                        {value+1}
                    </Box>
                    
                    <div className="slider">
                         <Slider/>
                    </div>
                    
                </div>
                
            )}
        </div>
    )
}



function Courses(){
    const [value,setValue]=React.useState(0);

    const handleChange=(event,newValue)=>{
            setValue(newValue);
    };

    return(
        <div className="container-courses">
            <div className="content">
                <p style={{fontSize:25}}>A broad selection of courses</p>
                <p>Choose from 183,000 online video courses with new additions published every month</p>
                <Box
                    sx={{
                        // width:400,
                        // height:400,
                        backgroundColor:'gray',
                        border:2
                    }}
                >
                    <Box sx={{borderBottom:1,borderColor:'divider'}}>
                        <Tabs value={value} onChange={handleChange}>
                            <Tab label="Item 1"/>
                            <Tab label="Item 2"/>
                            <Tab label="Item 3"/>
                            <Tab label="Item 4"/>
                            <Tab label="Item 5"/>
                            <Tab label="Item 6">Hi</Tab>
                        </Tabs>
                    </Box>
                    <TabPanel value={value} index={0}>
                            Item 1
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            Item 2
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            Item 3
                        </TabPanel>
                        <TabPanel value={value} index={3}>
                            Item 4
                        </TabPanel>
                        <TabPanel value={value} index={4}>
                            Item 5
                        </TabPanel>
                        <TabPanel value={value} index={5}>
                            Item 6
                        </TabPanel>
                </Box>
            </div>
            
        </div>
    )

}

export default Courses;