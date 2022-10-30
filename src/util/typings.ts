export interface User {
  firstName: string;
  lastName: string;
  age: number;
  id: string | number;
}

export interface UserState {
  users: User[];
}

export interface SortingState {
  firstName: SortingValue;
  lastName: SortingValue;
  age: SortingValue;
}

export interface SearchState {
  search: string;
}

export interface PaginationState {
  page: number;
  pageContentAmount: number;
}

export type SortingValue = -1 | 0 | 1;
