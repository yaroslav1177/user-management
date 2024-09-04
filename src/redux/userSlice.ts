import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../types/User";
import { UserState } from "../types/UserState";

const initialState: UserState = {
  users: [],
  filteredUsers: [],
  filters: {
    name: "",
    username: "",
    email: "",
    phone: "",
  },
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers(state, action: PayloadAction<User[]>) {
      state.users = action.payload;
      state.filteredUsers = action.payload;
    },
    setFilter(
      state,
      action: PayloadAction<{ key: keyof UserState["filters"]; value: string }>
    ) {
      state.filters[action.payload.key] = action.payload.value;
      state.filteredUsers = state.users.filter((user) =>
        Object.entries(state.filters).every(([key, value]) => {
          const userValue = user[key as keyof User];
          if (typeof userValue === "string") {
            return userValue.toLowerCase().includes(value.toLowerCase());
          }
          return false;
        })
      );
    },
    resetFilters(state) {
      state.filters = initialState.filters;
      state.filteredUsers = state.users;
    },
  },
});

export const { setUsers, setFilter, resetFilters } = userSlice.actions;
export default userSlice.reducer;
