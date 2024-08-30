import { User } from "./User";

export interface UserState {
  users: User[];
  filteredUsers: User[];
  filters: {
    name: string;
    username: string;
    email: string;
    phone: string;
  };
}
