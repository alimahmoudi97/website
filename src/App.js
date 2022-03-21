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

function App() {
  return (
    <div>
      {/* <Header/>
      <Introduce/>
      <Courses/>
      <p className="students-view-text">Students are viewing</p>
      <div className="students-view">
        <SliderCart/>
        
      </div>
      <p className="students-view-text">Top Categories</p>
      <Categories/>
      <div style={{marginTop:50,backgroundColor:'white'}}>
        <TopicCategories/>
      </div>
      <InstructorCart/>
      <UdemyBusinessCart/>
      <TrustedCompanies/>
      <FindOutCart/>
      <Footer/> */}
      <CourseDetails/>
  </div>

  );
}

export default App;
