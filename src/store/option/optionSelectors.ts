import { createSelector } from "@reduxjs/toolkit";

import { GlobalState } from "../store";

class OptionSelectors {
  private static readonly selectOptions = (state: GlobalState) => state.option;

  public static sorting = createSelector(
    this.selectOptions,
    (optionState) => optionState.sort,
  );
}

export default OptionSelectors;
