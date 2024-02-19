import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Expense = {
  id: string;
  name: string;
  date: string;
  price: number;
};

type InitialState = {
  expense: Expense[];
};

const initialState: InitialState = {
  expense: [],
};

const expensesSlice = createSlice({
  name: "expense",
  initialState: initialState,
  reducers: {
    addExpense(state, action: PayloadAction<Expense>) {
      state.expense = [...state.expense, action.payload];
    },

    removeExpense(state, action: PayloadAction<string>) {
      state.expense = state.expense.filter(
        (expense) => expense.id !== action.payload
      );
    },
  },
});

export default expensesSlice.reducer;

export const { addExpense, removeExpense } = expensesSlice.actions;
