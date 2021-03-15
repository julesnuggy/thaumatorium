type UserBase = {
  username: string;
  password: string;
};

export type User = UserBase & {
  id?: string;
}

export type UserFormValues = UserBase & {
  passwordConfirmation: string;
}

export type UserLoginFormValues = UserBase;