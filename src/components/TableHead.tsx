import * as React from "react";

import { useAppDispatch, useAppSelector } from "../store/hooks";
import OptionSelectors from "../store/option/optionSelectors";
import { setSortingOptions } from "../store/option/optionSlice";
import getNextSortingValue from "../util/helpers/getNextSortingValue";

import TableHeadItem from "./TableHeadItem";

const TableHead = () => {
  const sorting = useAppSelector(OptionSelectors.sorting);
  const dispatch = useAppDispatch();

  const handleSetFirstNameSorting = () => {
    dispatch(setSortingOptions({ firstName: getNextSortingValue(sorting.firstName) }));
  };

  const handleSetLastNameSorting = () => {
    dispatch(setSortingOptions({ lastName: getNextSortingValue(sorting.lastName) }));
  };

  const handleSetAgeSorting = () => {
    dispatch(setSortingOptions({ age: getNextSortingValue(sorting.age) }));
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
