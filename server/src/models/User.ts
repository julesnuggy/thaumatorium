export interface IUser {
  username: string;
  password: string;
}

export interface UserRequest extends IUser {}

export interface UserResponse extends IUser {
  id: string;
}

export type UserType = IUser & {
  id: string;
}

export class User implements IUser {
  public id!: string;
  public username!: string;
  public password!: string;

  constructor ({id, username, password}: UserType) {
    this.id = id;
    this.username = username;
    this.password = password
  }
}
