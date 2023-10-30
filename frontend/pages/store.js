import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "../features/counter/counterSlice";
import counterReducer from "./features/blogPostSlice";

export const store = configureStore({
  reducer: {
    blogPost: counterReducer,
  },
});
