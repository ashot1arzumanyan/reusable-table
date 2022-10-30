import { createSlice } from '@reduxjs/toolkit';

import getNextSortingValue from '../../util/helpers/getNextSortingValue';
import { SortingState, SortingValue } from '../../util/typings';

const initialState: SortingState = {
  firstName: 0,
  lastName: 0,
  age: 0,
};

const sortingSlice = createSlice({
  name: 'sorting',
  initialState,
  reducers: {
    changeFirstNameSorting: (state: SortingState) => {
      return {
        firstName: getNextSortingValue(state.firstName) as SortingValue,
        lastName: 0 as SortingValue,
        age: 0 as SortingValue,
      };
    },
    changeLastNameSorting: (state: SortingState) => {
      return {
        firstName: 0 as SortingValue,
        lastName: getNextSortingValue(state.lastName) as SortingValue,
        age: 0 as SortingValue,
      };
    },
    changeAgeSorting: (state: SortingState) => {
      return {
        firstName: 0 as SortingValue,
        lastName: 0 as SortingValue,
        age: getNextSortingValue(state.age) as SortingValue,
      };
    },
  },
});

export const {
  changeFirstNameSorting,
  changeLastNameSorting,
  changeAgeSorting,
} = sortingSlice.actions;

export default sortingSlice;
