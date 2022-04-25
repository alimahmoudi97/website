import {createSlice} from '@reduxjs/toolkit';

export const buyCoursesSlice=createSlice({
    name:"buy courses",
    initialState:{
        amountsOfCourses:0
    },
    reducers:{
        increment:state=>{
            state.amountsOfCourses+=1
        },
        decrement:state=>{
            state.amountsOfCourses-=1
        }
    }
})

export const {increment,decrement}=buyCoursesSlice.actions;
export default buyCoursesSlice.reducer;