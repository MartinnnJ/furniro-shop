import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pageResults: 16,
  pageSelected: 1,
};

const paginatorSlice = createSlice({
  name: 'paginatorSlice',
  initialState,
  reducers: {
    changeSelectedPage(state, action) {
      state.pageSelected = +action.payload;
    },
    setGridLayout(state, action) {
      state.pageResults = +action.payload;
    }
  },
});

export const paginatorActions = paginatorSlice.actions;

export default paginatorSlice.reducer;