import * as React from "react";

import { useAppDispatch, useAppSelector } from "../store/hooks";
import SortingSelectors from "../store/sorting/sortingSelectors";
import {
  changeFirstNameSorting,
  changeLastNameSorting,
  changeAgeSorting,
} from "../store/sorting/sortingSlice";

import TableHeadItem from "./TableHeadItem";

const TableHead = () => {
  const sorting = useAppSelector(SortingSelectors.sorting);
  const dispatch = useAppDispatch();

  const handleSetFirstNameSorting = () => {
    dispatch(changeFirstNameSorting());
  };

  const handleSetLastNameSorting = () => {
    dispatch(changeLastNameSorting());
  };

  const handleSetAgeSorting = () => {
    dispatch(changeAgeSorting());
  };

  return (
    <thead>
      <tr>
        <TableHeadItem
            name="First Name"
            onClick={handleSetFirstNameSorting}
            sorting={sorting.firstName}
        />
        <TableHeadItem
            name="Last Name"
            onClick={handleSetLastNameSorting}
            sorting={sorting.lastName}
        />
        <TableHeadItem
            name="Age"
            onClick={handleSetAgeSorting}
            sorting={sorting.age}
        />
      </tr>
    </thead>
  );
};

export default TableHead;
