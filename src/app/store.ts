import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "../features/counter/counterSlice";

import PostReducer from "../features/post/postSlice";

export const store = configureStore({
  reducer: {
    counter: CounterReducer,
    postsSlice: PostReducer,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(postApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
