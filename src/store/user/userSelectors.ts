import { createSelector } from "@reduxjs/toolkit";

import { GlobalState } from "../store";

class UserSelectors {
  private static readonly selectUsers = (state: GlobalState) => state.user;

  public static users = createSelector(
    this.selectUsers,
    (userState) => userState.users,
  );
}

export default UserSelectors;
