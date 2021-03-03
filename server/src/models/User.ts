export interface IUser {
  username: string;
  password: string;
}

export interface UserRequest extends IUser {}

export interface UserResponse extends IUser {
  id: string;
}

export class User implements IUser {
  public id!: string;
  public username!: string;
  public password!: string;
}
