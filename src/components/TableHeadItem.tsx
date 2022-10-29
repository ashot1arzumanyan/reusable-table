import * as React from "react";
import styled from "styled-components";

import { SortingValue } from "../util/typings";

interface Props {
  name: string;
  sorting: SortingValue;
  onClick: VoidFunction;
}

interface StyledArrowProps {
  active: boolean;
}

const StyledArrow = styled.span<StyledArrowProps>`
  ${({ active }) => active
    ? (`color: red;`)
    : (`color: grey;`)
  }
`;

const TableHeadItem = ({
  name,
  sorting,
  onClick,
}: Props) => {
  return (
    <th>
      <button onClick={onClick}>
        {name}
        {' '}
        <StyledArrow active={sorting > 0}>
          &uarr;
        </StyledArrow>
        <StyledArrow active={sorting < 0}>
          &darr;
        </StyledArrow>
      </button>
    </th>
  );
};

export default TableHeadItem;
