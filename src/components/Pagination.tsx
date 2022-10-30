import * as React from "react";
import styled from "styled-components";

import { useAppDispatch, useAppSelector } from "../store/hooks";
import PaginationSelectors from "../store/pagination/paginationSelectors";
import { setPage } from "../store/pagination/paginationSlice";
import UserSelectors from "../store/user/userSelectors";
import getNumbersByMax from "../util/helpers/getNumbersByMax";

interface StyledButtonProps {
  active: boolean;
}

const StyledButton = styled.button<StyledButtonProps>`
  cursor: pointer;
  margin: 8px;
  ${({ active }) => active
    ? (`
      color: red;
    `)
    : (`
      color: black;
    `)
  }
`;

const Pagination = () => {
  const pagesCount = useAppSelector(UserSelectors.pagesCount);
  const { page } = useAppSelector(PaginationSelectors.pagination);
  const dispatch = useAppDispatch();

  const handleChangePage = (nextPage: number) => () => {
    dispatch(setPage(nextPage));
  };

  return (
    <div>
      {getNumbersByMax(pagesCount).map((num) => (
        <StyledButton
            key={num}
            active={page === num}
            onClick={handleChangePage(num)}
        >
          {num}
        </StyledButton>
      ))}
    </div>
  );
};

export default Pagination;
