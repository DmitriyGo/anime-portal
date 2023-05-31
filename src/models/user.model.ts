export enum UserRole {
  USER = 'user',
  ADMIN = 'admin',
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  avatar: string | null;
  role: UserRole;
}
