import express from 'express';
import bodyParser from 'body-parser';

import { RegisterRoutes } from '../build/routes';
import { errorHandler } from './middleware/errorHandler';

export const app = express();

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json())

RegisterRoutes(app)

app.use(errorHandler);
