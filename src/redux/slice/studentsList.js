import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchStudents = createAsyncThunk("fetchStudents", async()=>{
    const response = await axios("https://64dcf61be64a8525a0f76c4d.mockapi.io/api/v1/students")
    return response.data
})

const studentsSlice = createSlice({
    name: "sliceStudents",
    initialState: {
        isLoading: false,
        data:  [],
        isError: false,
    },

    extraReducers: (builder)=>{
        builder.addCase(fetchStudents.pending, (state)=>{
            state.isLoading = true
        })
        builder.addCase(fetchStudents.fulfilled, (state, action)=>{
            state.isLoading = false,
            state.data = action.payload
        })
        builder.addCase(fetchStudents.rejected, (state)=>{
            state.isError = true,
            console.error("@API_TYPE_ERROR")
        })
    }
})

export default studentsSlice.reducer

