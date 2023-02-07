import { UserCredentials } from "./User";

export interface LoginResponse {
  user: UserCredentials;
  token: string;
}

export interface Auth {
  user: UserCredentials | null;
  token: string | null;
  isAuthenticated: boolean;
}
