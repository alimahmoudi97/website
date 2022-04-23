import React from 'react';
import './Courses.css';
import {styled} from '@mui/material/styles';
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
                        <h2>
                            Expand your career opportunities with Python
                        </h2>
                        <p style={{width:'60%'}}>
                            Take one of Udemy’s range of Python courses and learn how to code using this incredibly useful language. Its simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. You’ll learn how to build everything from games to sites to apps. Choose from a range of courses that will appeal to
                        </p>
                        
                    </Box>

                    <div style={{paddingLeft:22}}>
                        <button className="btn-explore">Explore Python</button>
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
                <h1>A broad selection of courses</h1>
                <p>Choose from 183,000 online video courses with new additions published every month</p>
                <Box>
                    <Box sx={{borderBottom:1,borderColor:'divider'}}>
                        <AntTabs value={value} onChange={handleChange} textColor="secondary">
                            <AntTab label="Python"/>
                            <AntTab label="Excel"/>
                            <AntTab label="Web Development"/>
                            <AntTab label="JavaScript"/>
                            <AntTab label="Data Science"/>
                            <AntTab label="AWS Certification">Hi</AntTab>
                        </AntTabs>
                    </Box>
                    <Box sx={{border:1,borderColor:'#d1d7dc',paddingBottom:10}}>
                            <TabPanel value={value} index={0}/>
                            <TabPanel value={value} index={1}/>
                            <TabPanel value={value} index={2}/>
                            <TabPanel value={value} index={3}/>
                            <TabPanel value={value} index={4}/>
                            <TabPanel value={value} index={5}/>
                    </Box>
                       
                </Box>
            </div>
            
        </div>
    )

}

export default Courses;

const AntTabs = styled(Tabs)({
    // borderBottom: '1px solid #e8e8e8',
    '& .MuiTabs-indicator': {
      backgroundColor: 'rgb(255, 255, 255,0)',
    },
  });

const AntTab = styled((props) => <Tab disableRipple {...props} />)(({ theme }) => ({
    color: '#4d4d4d',
    '&:hover': {
      color: 'black',
      fontWeight:'bold',
    },
    '&.Mui-selected': {
      color: 'black',
    //   fontSize:20,
      fontWeight:'bold',
    },

  }));