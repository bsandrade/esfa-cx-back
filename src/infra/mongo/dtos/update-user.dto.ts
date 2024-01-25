export type UpdateUserDto = {
  email: string;
  name?: string;
  photo?: string;
  isAdmin?: boolean;
  active?: boolean;
};
