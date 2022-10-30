import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { SearchState } from "../../util/typings";

const initialState: SearchState = {
  search: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearch: (state: SearchState, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
  },
});

export const { setSearch } = searchSlice.actions;

export default searchSlice;
