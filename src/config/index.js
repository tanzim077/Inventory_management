/*
 * File           : index.js
 * Project        : inventory-management
 * Created Date   : Tu 21 May 2024 04:23:24
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

import dotenv from 'dotenv';
dotenv.config();

const config = {
  PORT: process.env.PORT || 5001,
  DATABASE_URL: process.env.DATABASE_URL,
  JWT_SECRET: process.env.JWT_SECRET,
  MAX_REQUEST_LIMIT: process.env.MAX_REQUEST_LIMIT,
};

export default config;
