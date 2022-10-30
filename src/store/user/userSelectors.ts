import { createSelector } from "@reduxjs/toolkit";

import { sortNumbers, sortStrings } from "../../util/helpers/sortingHelpers";
import SortingSelectors from "../sorting/sortingSelectors";
import { GlobalState } from "../store";

class UserSelectors {
  private static readonly selectUsers = (state: GlobalState) => state.user;

  public static users = createSelector(
    this.selectUsers,
    (userState) => {
      const sortWithAscendingOrDescending = sortStrings(1);
      return [...userState.users].sort((a, b) => sortWithAscendingOrDescending(a.firstName, b.firstName));
    },
  );

  public static usersSorted = createSelector(
    this.users,
    SortingSelectors.firstName,
    SortingSelectors.lastName,
    SortingSelectors.age,
    (users, firstName, lastName, age) => {
      if (firstName !== 0) {
        const sortWithAscendingOrDescending = sortStrings(firstName);
        return [...users].sort((a, b) => sortWithAscendingOrDescending(a.firstName, b.firstName));
      }
      if (lastName !== 0) {
        const sortWithAscendingOrDescending = sortStrings(lastName);
        return [...users].sort((a, b) => sortWithAscendingOrDescending(a.lastName, b.lastName));
      }
      if (age !== 0) {
        const sortWithAscendingOrDescending = sortNumbers(age);
        return [...users].sort((a, b) => sortWithAscendingOrDescending(a.age, b.age));
      }
      return users;
    },
  );
}

export default UserSelectors;
