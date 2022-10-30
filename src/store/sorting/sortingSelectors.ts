import { createSelector } from "@reduxjs/toolkit";

import { GlobalState } from "../store";

class SortingSelectors {
  private static readonly selectSorting = (state: GlobalState) => state.sorting;

  public static sorting = createSelector(
    this.selectSorting,
    (sortingState) => sortingState,
  );

  public static firstName = createSelector(
    this.selectSorting,
    (sortingState) => sortingState.firstName,
  );

  public static lastName = createSelector(
    this.selectSorting,
    (sortingState) => sortingState.lastName,
  );

  public static age = createSelector(
    this.selectSorting,
    (sortingState) => sortingState.age,
  );
}

export default SortingSelectors;
