import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:5000/courses";

// Async action to fetch courses
export const fetchCourses = createAsyncThunk("courses/fetchCourses", async () => {
  const response = await axios.get(API_URL);
  return response.data;
});

const courseSlice = createSlice({
  name: "courses",
  initialState: { courses: [], status: "idle", error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourses.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.courses = action.payload;
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message; 
      });
  },
});

export default courseSlice.reducer;
