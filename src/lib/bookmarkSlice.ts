import { createSlice } from "@reduxjs/toolkit";

const bookmarkSlice = createSlice({
  name: "bookmark",
  initialState: {
    items: [],
  },
  reducers: {
    additems: (state, action) => {
      state.items.push(action.payload);
    },
    removeitems: (state) => {
      state.items.pop();
    }, 
    clearcart: (state) => {
      state.items.length = 0;
    },
  },
});

export const { additems, removeitems, clearcart } = bookmarkSlice.actions;

export default bookmarkSlice.reducer;
