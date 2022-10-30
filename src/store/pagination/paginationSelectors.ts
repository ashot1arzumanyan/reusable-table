import { createSelector } from "@reduxjs/toolkit";

import { GlobalState } from "../store";

class PaginationSelectors {
  private static readonly selectPagination = (state: GlobalState) => state.pagination;

  public static pagination = createSelector(
    this.selectPagination,
    (paginationState) => paginationState,
  );
}

export default PaginationSelectors;
