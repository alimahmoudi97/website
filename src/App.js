import {Routes,Route} from 'react-router-dom';
import Header from './components/header/Header'
import Introduce from './components/Introduce/Introduce';
import Courses from './components/courses/Courses';
import CartCourse from './components/cart_course/CartCourse';
import SliderCart from './components/slider/Slider';
import Categories from './components/categories/Categories';
import TopicCategories from './components/categories/TopicCategories';
import InstructorCart from './components/Instructor_Cart/InstructorCart.js';
import UdemyBusinessCart from './components/Udemy_business_Cart/UdemyBusinessCart.js';
import FindOutCart from './components/Find_Out_Cart/Find_Out_Cart.js';
import TrustedCompanies from './components/TrustedCompanies/Trusted_Companies.js';
import Footer from './components/footer/Footer.js';
import './App.css';
import CartBuy from './components/cart_buy/CartBuy';
import CourseDetails from './components/pages/CourseDetails';
import Login from './components/pages/Login';
import SignUp from './components/pages/SignUp';

function Home(){
  return(
    <div>
      <Introduce/>
      <Courses/>
      <h2 className="students-view-text">Students are viewing</h2>
      <div className="students-view">
        <SliderCart/>
        
      </div>
      <h2 className="students-view-text">Top Categories</h2>
      <Categories/>
      <div style={{marginTop:50,backgroundColor:'white'}}>
        <TopicCategories/>
      </div>
      <InstructorCart/>
      <UdemyBusinessCart/>
      <TrustedCompanies/>
      <FindOutCart/>
    </div>
  )
}

function App() {
  return (
    <div style={{position:'relative',paddingBottom:300}}>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="coursedetails" element={<CourseDetails/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="signup" element={<SignUp/>}/>
      </Routes>
      <Footer/>
      {/* <CourseDetails/> */}
  </div>

  );
}

export default App;
