import express from 'express';
import bodyParser from 'body-parser';
const cors = require('cors');

import { RegisterRoutes } from '../build/routes';
import { errorHandler } from './middleware/errorHandler';

export const app = express();

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());
app.use(cors());

RegisterRoutes(app)

app.use(errorHandler);
