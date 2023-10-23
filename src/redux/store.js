import { configureStore } from "@reduxjs/toolkit";
import studentsSlice from "./slice/studentsList";

export const store = configureStore({
    reducer:{
        students: studentsSlice,
    }
})