import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import postApi from "../../api/postApi";

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type PostState = {
  posts: Post[];
  loading: boolean;
  status: "SUCCESS" | "IDLE" | "ERROR";
  errorMsg?: any;
};

const initialState: PostState = {
  posts: [],
  status: "IDLE",
  loading: false,
};

// First, create the thunk
export const fetchPost = createAsyncThunk(
  "posts/getAllPosts",
  async (id, thunkAPI) => {
    try {
      const response = await postApi.getAllPost();
      return response.data;
    } catch (err) {
      const errorMsg = err.message;
      return thunkAPI.rejectWithValue(errorMsg);
    }
  }
);

// Then, handle actions in your reducers:
const postsSlice = createSlice({
  name: "postsSlice",
  initialState: initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      .addCase(fetchPost.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPost.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.status = "SUCCESS";
        state.loading = false;
      })
      .addCase(fetchPost.rejected, (state, action) => {
        if (action.payload) {
          state.loading = false;
          state.errorMsg = action.payload;
        } else {
          action.payload;
        }
      });
  },
});

export default postsSlice.reducer;
