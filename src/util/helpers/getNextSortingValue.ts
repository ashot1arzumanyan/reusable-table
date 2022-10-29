import { SortingValue } from "../typings";

const getNextSortingValue = (current: SortingValue) => {
  if (current === 1) {
    return -1;
  }
  return current + 1;
};

export default getNextSortingValue;
