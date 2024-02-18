import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialStateType = {
  ids: string[];
};
const initialState: InitialStateType = {
  ids: [],
};

const favoriteSlice = createSlice({
  name: "/favorite",
  initialState,
  reducers: {
    addFavorite(state, action: PayloadAction<string>) {
      state.ids = [...state.ids, action.payload];
    },

    removeFavorite(state, action: PayloadAction<string>) {
      state.ids = state.ids.filter((id) => id !== action.payload);
    },
  },
});

export const { addFavorite, removeFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;
