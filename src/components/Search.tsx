import * as React from "react";

import { useAppDispatch, useAppSelector } from "../store/hooks";
import PaginationSelectors from "../store/pagination/paginationSelectors";
import { setPage } from "../store/pagination/paginationSlice";
import SearchSelectors from "../store/search/searchSelectors";
import { setSearch } from "../store/search/searchSlice";

const Search = () => {
  const search = useAppSelector(SearchSelectors.search);
  const { page } = useAppSelector(PaginationSelectors.pagination);
  const dispatch = useAppDispatch();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearch(e.target.value));
    if (page !== 1) {
      dispatch(setPage(1));
    }
  };

  return (
    <input
        value={search}
        onChange={handleSearchChange}
        placeholder="Search by keyword"
    />
  );
};

export default Search;
