import { createSelector } from "@reduxjs/toolkit";

import { GlobalState } from "../store";

class SearchSelectors {
  private static readonly selectSearch = (state: GlobalState) => state.search;

  public static search = createSelector(
    this.selectSearch,
    (searchState) => searchState.search,
  );
}

export default SearchSelectors;
