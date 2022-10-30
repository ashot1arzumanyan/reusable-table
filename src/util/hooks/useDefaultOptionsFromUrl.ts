import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setPage } from "../../store/pagination/paginationSlice";
import { setSearch } from "../../store/search/searchSlice";
import UserSelectors from "../../store/user/userSelectors";
import searchParamsKeys from "../constants/searchParamsKeys";
import getIsNumeric from "../helpers/getIsNumeric";

const useDefaultOptionsFromUrl = () => {
  const pagesCount = useAppSelector(UserSelectors.pagesCount);
  const [searchParams] = useSearchParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const search = searchParams.get(searchParamsKeys.search);
    const pageString = searchParams.get(searchParamsKeys.page);

    if (search) {
      dispatch(setSearch(search));
    }

    const pageIsNumeric = getIsNumeric(pageString);
    if (pageIsNumeric) {
      const page = Number(pageString);
      const pageIsInRange = page > 0 && page <= pagesCount;
      if (pageIsInRange) {
        dispatch(setPage(page));
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useDefaultOptionsFromUrl;
