import { configureStore } from "@reduxjs/toolkit";
import courseReducer from "./courseSlice";
import enquiryReducer from "./enquirySlice";

const store = configureStore({
  reducer: {
    courses: courseReducer,
    enquiries: enquiryReducer,
  },
});

export default store;
