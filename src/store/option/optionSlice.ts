import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { OptionState, SortingOptions } from '../../util/typings';

const initialState: OptionState = {
  sort: {
    firstName: 1,
    lastName: 0,
    age: 0,
  },
  search: '',
};

const optionSlice = createSlice({
  name: 'option',
  initialState,
  reducers: {
    setSortingOptions: (state: OptionState, action: PayloadAction<Partial<SortingOptions>>) => {
      state.sort = {
        ...state.sort,
        ...action.payload,
      };
    },
  },
});

export const { setSortingOptions } = optionSlice.actions;

export default optionSlice;
