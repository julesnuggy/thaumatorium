import {
  NextFunction,
  Request as ExRequest,
  Response as ExResponse, 
} from 'express';
import { ValidateError } from 'tsoa';

import { AuthenticationError } from '../errors/AuthenticationError';

export const errorHandler = (
  err: unknown,
  req: ExRequest,
  res: ExResponse,
  next: NextFunction
): ExResponse | void => {
  if (err instanceof ValidateError) {
    console.warn(`Caught Validation Error for ${req.path}:`, err.fields);
    return res.status(422).json({
      message: 'Validation Failed',
      details: err?.fields,
    });
  }

  if (err instanceof AuthenticationError) {
    console.error(err.stack)
    return res.status(err.status).json({ message: err.message });
  }

  if (err instanceof Error) {
    console.error(err.stack)
    return res.status(500).json({ message: 'Internal Server Error' });
  }
  next();
};