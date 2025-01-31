import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:5000/enquiries";

// Async action to submit an enquiry
export const submitEnquiry = createAsyncThunk("enquiries/submitEnquiry", async (enquiry) => {
  const response = await axios.post(API_URL, enquiry);
  return response.data;
});

// Async action to fetch enquiries
export const fetchEnquiries = createAsyncThunk("enquiries/fetchEnquiries", async () => {
  const response = await axios.get(API_URL);
  return response.data;
});

const enquirySlice = createSlice({
  name: "enquiries",
  initialState: { enquiries: [], status: "idle", error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEnquiries.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchEnquiries.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.enquiries = action.payload;
      })
      .addCase(fetchEnquiries.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default enquirySlice.reducer;
