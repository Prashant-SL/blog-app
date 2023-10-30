import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  blogPosts: [],
};

export const blogPostSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    getBlogPosts: (state, action) => {
      state.blogPosts = action.payload;
    },
  },
});

export const { getBlogPosts } = blogPostSlice.actions;

export default blogPostSlice.reducer;
