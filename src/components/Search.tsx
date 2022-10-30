import * as React from "react";
import { useSearchParams } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../store/hooks";
import PaginationSelectors from "../store/pagination/paginationSelectors";
import { setPage } from "../store/pagination/paginationSlice";
import SearchSelectors from "../store/search/searchSelectors";
import { setSearch } from "../store/search/searchSlice";
import useDefaultOptionsFromUrl from "../util/hooks/useDefaultOptionsFromUrl";

const Search = () => {
  const search = useAppSelector(SearchSelectors.search);
  const { page } = useAppSelector(PaginationSelectors.pagination);
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  useDefaultOptionsFromUrl();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const nextSearch = e.target.value;
    dispatch(setSearch(nextSearch));
    if (nextSearch) {
      searchParams.set('search', e.target.value);
    } else {
      searchParams.delete('search');
    }

    if (page !== 1) {
      const nextPage = 1;
      dispatch(setPage(nextPage));
      searchParams.set('page', String(nextPage));
    }
    setSearchParams(searchParams);
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
