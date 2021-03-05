import {
  Body,
  Controller,
  Get,
  Post,
  Route,
  SuccessResponse,
} from 'tsoa';
import { UserRequest, UserResponse } from "../models/User";
import { UsersService } from '../services/usersService';

@Route('users')
export class UsersController extends Controller {
  private service =  new UsersService();

  @Get()
  public async getUsers(): Promise<UserResponse[]> {
    return this.service.getUsers();
  }

  @SuccessResponse('200', 'Created')
  @Post()
  public async createUser(@Body() user: UserRequest): Promise<void> {
    this.setStatus(200);
    return this.service.createUser(user);
  }
}
