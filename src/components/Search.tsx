import * as React from "react";

import { useAppDispatch, useAppSelector } from "../store/hooks";
import SearchSelectors from "../store/search/searchSelectors";
import { setSearch } from "../store/search/searchSlice";

const Search = () => {
  const search = useAppSelector(SearchSelectors.search);
  const dispatch = useAppDispatch();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearch(e.target.value));
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
