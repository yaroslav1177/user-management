import { createAsyncThunk } from '@reduxjs/toolkit';
import { User } from '../types/User';
import { setUsers } from './userSlice';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async (_, { dispatch }) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data: User[] = await response.json();
  dispatch(setUsers(data));
});
