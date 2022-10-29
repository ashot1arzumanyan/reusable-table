export interface User {
  firstName: string;
  lastName: string;
  age: number;
  id: string | number;
}

export interface UserState {
  users: User[];
}

export interface OptionState {
  sort: SortingOptions;
  search: string;
}

export interface  SortingOptions {
  firstName: SortingValue;
  lastName: SortingValue;
  age: SortingValue;
}

export type SortingValue = -1 | 0 | 1;
