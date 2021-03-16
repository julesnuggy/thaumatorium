import {
  Body,
  Path,
  Controller,
  Get,
  Post,
  Request,
  Route,
  SuccessResponse,
} from 'tsoa';
import { Request as ExpressRequest } from 'express';
import { UserAuthenticatedResponse, UserRequest, UserResponse } from '../models/User';
import { UsersService } from '../services/usersService';

@Route('users')
export class UsersController extends Controller {
  private service =  new UsersService();

  @Get()
  public async getUsers(): Promise<UserResponse[]> {
    return this.service.getUsers();
  }

  @Get('{username}')
  public async getUserByUsername(@Path() username: string): Promise<UserResponse> {
    return this.service.getUserByUsername(username);
  }

  @SuccessResponse('200', 'Created')
  @Post()
  public async createUser(@Body() user: UserRequest): Promise<void> {
    this.setStatus(200);
    return this.service.createUser(user);
  }

  @SuccessResponse('200', 'Created')
  @Post('/authenticate')
  public async authenticateUser(
    @Body() user: UserRequest,
    @Request() req: ExpressRequest): Promise<UserAuthenticatedResponse> {
    const { isAuthenticated, sessionId } = await this.service.authenticateUser(user);
    this.setHeader('Access-Control-Allow-Credentials', 'true');
    this.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,UPDATE,OPTIONS')
    this.setHeader('Access-Control-Allow-Origin', req.headers.origin);
    this.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept')
    this.setHeader('Set-Cookie', [`sessionId=${sessionId}; httpOnly; secure; signed; max-age=86400; path=/`]);
    this.setStatus(200);
    return {
      isAuthenticated,
      sessionId
    };
  }
}
