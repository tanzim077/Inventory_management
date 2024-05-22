/*
 * File           : app.js
 * Project        : inventory-management
 * Created Date   : Tu 21 May 2024 04:14:06
 * Description    : <<description>>
 *
 * -----------------------------------------------------
 * Author         : Tanzim Ahmed
 * Email          : tanzimahmed077@gmail.com
 * -----------------------------------------------------
 * Last Modified  : Tue May 21 2024
 * Modified By    : Tanzim Ahmed
 * -----------------------------------------------------
 * Copyright (c) 2024 Tanzim Ahmed
 * -----------------------------------------------------
 */

import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import handleError from './app/middlewares/handleError.js';
import limiter from './app/middlewares/rateLimiter.js';
import routes from './app/routes/index.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(limiter);

app.use('/api/v1', routes);

app.use((error, req, res, next) => {
  handleError(error, res);
});
export default app;
