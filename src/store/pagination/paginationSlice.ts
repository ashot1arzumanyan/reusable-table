import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { PaginationState } from "../../util/typings";

const initialState: PaginationState = {
  page: 1,
  pageContentAmount: 5,
};

const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    setPage: (state: PaginationState, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
  },
});

export const { setPage } = paginationSlice.actions;

export default paginationSlice;
