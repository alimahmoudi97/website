import Header from './components/header/Header'
import Introduce from './components/Introduce/Introduce';
import Courses from './components/courses/Courses';
import CartCourse from './components/cart_course/CartCourse';
import SliderCart from './components/slider/Slider';
function App() {
  return (
    <div style={{backgroundColor:'gray'}}>
    {/* <Header/>
    <Introduce/>
    <Courses/> */}
    <div style={{width:'90%',marginLeft:70}}>
      <SliderCart/>
    </div>    
  </div>

  );
}

export default App;
