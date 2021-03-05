export type User = {
  username: string;
  password: string;
}

export type UserFormValues = User & {
  passwordConfirmation: string;
}