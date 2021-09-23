const express = require('express');
import 'express-async-errors';
import { json } from 'body-parser';
import {
  errorHandler,
  NotFoundError,
  currentUser
} from '@ssticketscommon/common';
import { createTicketRouter } from './routes/new';
import {showTicketRouter} from './routes/show';
import {indexTicketRouter} from './routes/index';
import {updateTicketRouter } from './routes/update';

import { create } from 'istanbul-reports';

const cookieSession = require('cookie-session');

const app = express();
app.set('trust proxy', true);
app.use(json());
app.use(
  cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== 'test'
  })
);
app.use(currentUser);
app.use(createTicketRouter);
app.use(showTicketRouter);
app.use(indexTicketRouter);
app.use(updateTicketRouter);

app.all('*', async (req: Request, res: Response) => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
