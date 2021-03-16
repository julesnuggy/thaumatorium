export type UserRequest = {
  username: string;
  password: string;
}

export type UserResponse = {
  id: string;
  username: string;
}

export type UserPasswordResponse = {
  id: string;
  password: string;
}

export type UserType = {
  id: string;
  username: string;
  password: string;
}

export class User implements UserType {
  public id!: string;
  public username!: string;
  public password!: string;

  constructor ({id, username, password}: UserType) {
    this.id = id;
    this.username = username;
    this.password = password
  }
}
