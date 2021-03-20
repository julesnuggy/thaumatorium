type UserBase = {
  username: string;
  password: string;
};

export type User = UserBase & {
  id?: string;
}

export type UserAuthenticatedResponse = {
  isAuthenticated: boolean;
  sessionId?: string;
}

export type UserFormValues = UserBase & {
  passwordConfirmation: string;
}

export type UserLoginFormValues = UserBase;