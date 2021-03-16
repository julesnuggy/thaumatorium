import express from 'express';
import bodyParser from 'body-parser';
const cookieParser = require('cookie-parser');
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
app.use(cors({
  credentials : true,
  origin: 'http://localhost:3000'
}));
app.use(cookieParser());

RegisterRoutes(app)

app.use(errorHandler);
