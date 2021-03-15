export type User = {
  id?: string;
  username: string;
  password: string;
}

export type UserFormValues = User & {
  passwordConfirmation: string;
}

export type UserLoginFormValues = User;