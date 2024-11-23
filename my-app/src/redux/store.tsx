import { configureStore } from "@reduxjs/toolkit";
import SliceReducer from "./Slice";

export const store = configureStore({
  reducer: {
    detail: SliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
