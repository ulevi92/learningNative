import { configureStore } from "@reduxjs/toolkit";
import expenceReducer from "./features/expensesSlice";

const store = configureStore({
  reducer: {
    expense: expenceReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
