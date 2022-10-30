import { createSlice } from '@reduxjs/toolkit';

import users from '../../util/constants/users';
import { UserState } from '../../util/typings';

const initialState: UserState = {
  users,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: undefined,
});

export default userSlice;

