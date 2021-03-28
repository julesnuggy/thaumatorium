import {
  Body,
  Controller,
  Delete,
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
  private service = new UsersService();

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

  @SuccessResponse('201', 'Created')
  @Post('/authenticate')
  public async authenticateUser(
    @Body() user: UserRequest,
    @Request() req: ExpressRequest): Promise<UserAuthenticatedResponse> {
    const { isAuthenticated, sessionId } = await this.service.authenticateUser(user);
    sessionId && this.setSessionCookieHeaders(sessionId, req);
    this.setStatus(201);
    return {
      isAuthenticated,
      sessionId
    };
  }

  @Get('/verify-session')
  public async verifySession(@Request() req: ExpressRequest): Promise<UserResponse> {
    const { sessionId } = req.cookies;
    const user = await this.service.verifySession(sessionId);
    this.setSessionCookieHeaders(sessionId, req);
    return user;
  }

  @SuccessResponse('204', 'Success')
  @Delete()
  public async logout (@Request() req: ExpressRequest): Promise<void> {
    const { sessionId } = req.cookies;
    await this.service.logout(sessionId);
    this.setSessionCookieHeaders('', req, true);
    this.setStatus(204)
  }

  private setSessionCookieHeaders = (sessionId: string, req: ExpressRequest, expireCookie?: boolean) => {
    const cookieExpiry = expireCookie ? `Expires=${(new Date()).toUTCString()}` : 'max-age=86400';
    this.setHeader('Access-Control-Allow-Credentials', 'true');
    this.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,UPDATE,OPTIONS')
    this.setHeader('Access-Control-Allow-Origin', req.headers.origin);
    this.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept')
    this.setHeader('Set-Cookie', [`sessionId=${sessionId}; httpOnly; secure; signed; ${cookieExpiry}; path=/`]);
  }
}