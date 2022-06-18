import { configureStore } from "@reduxjs/toolkit";
import { blogsApi } from "./redux/api-query/blogsApi";
import counterReducer from "./redux/redux-toolkit/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [blogsApi.reducerPath]: blogsApi.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
