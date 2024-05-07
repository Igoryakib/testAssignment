import { configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "./reducers";

const store = configureStore({
    reducer: {
      productsReducer
    },
    // middleware,
    devTools: process.env.NODE_ENV === 'development',
});
export {store};

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch