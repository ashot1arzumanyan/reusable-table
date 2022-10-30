import { createSelector } from "@reduxjs/toolkit";

import getIsNumeric from "../../util/helpers/getIsNumeric";
import { sortNumbers, sortStrings } from "../../util/helpers/sortingHelpers";
import PaginationSelectors from "../pagination/paginationSelectors";
import SearchSelectors from "../search/searchSelectors";
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

  public static usersFilteredBySearch = createSelector(
    this.users,
    SearchSelectors.search,
    (users, search) => {
      if (!search) {
        return users;
      }

      const searchIsNumeric = getIsNumeric(search);
      if (searchIsNumeric) {
        return users.filter((user) => String(user.age).startsWith(search));
      }

      return users.filter((user) => user.firstName.includes(search) || user.lastName.includes(search));
    },
  );

  public static usersLength = createSelector(
    this.usersFilteredBySearch,
    (users) => users.length,
  );

  public static pagesCount = createSelector(
    PaginationSelectors.pagination,
    this.usersLength,
    ({ pageContentAmount }, usersLength) => {
      return Math.ceil(usersLength / pageContentAmount);
    },
  );

  public static usersSorted = createSelector(
    this.usersFilteredBySearch,
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

  public static usersByPage = createSelector(
    this.usersSorted,
    PaginationSelectors.pagination,
    (users, { page, pageContentAmount }) => {
      return [...users].slice((page - 1) * pageContentAmount, page * pageContentAmount);
    },
  );
}

export default UserSelectors;
