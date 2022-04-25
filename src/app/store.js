import {configureStore} from '@reduxjs/toolkit';
import buyCoursesReducer from './buyCoursesSlice';

export default configureStore({
    reducer:{
        counter:buyCoursesReducer
    }
})