import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cards: [],
};

export const infoCardSlice = createSlice({
  name: "infoCard",
  initialState,
  reducers: {
    setCards: (state, action) => {
      state.cards = action.payload;
    },
  },
});

export const { setCards } = infoCardSlice.actions;

export default infoCardSlice.reducer;
