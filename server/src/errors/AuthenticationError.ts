export class AuthenticationError extends Error {
  status: number;
  message: string;
  name: string;

  constructor (status?: number, message?: string) {
    super();
    Error.captureStackTrace(this, this.constructor);
    this.name = this.constructor.name;
    this.message = message || 'Could not authenticate';
    this.status = status || 401;
  }
}