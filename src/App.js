import Header from './components/header/Header'
import Introduce from './components/Introduce/Introduce';
import Courses from './components/courses/Courses';
import CartCourse from './components/cart_course/CartCourse';
import SliderCart from './components/slider/Slider';
import Categories from './components/categories/Categories';
import TopicCategories from './components/categories/TopicCategories';
import './App.css';
function App() {
  return (
    <div>
      <Header/>
      <Introduce/>
      <Courses/>
      <p className="students-view-text">Students are viewing</p>
      <div className="students-view">
        <SliderCart/>
      </div>
      <p className="students-view-text">Top Categories</p>
      <Categories/>
      <p className="students-view-text">Featured topics by category</p>
      <TopicCategories/>
  </div>

  );
}

export default App;
