export interface User {
  firstName: string;
  lastName: string;
  age: number;
  id: string | number;
}

export interface UserState {
  users: User[];
}
