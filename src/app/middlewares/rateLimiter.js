/*
 * File           : rateLimiter.js
 * Project        : inventory-management
 * Created Date   : We 22 May 2024 02:25:50
 * Description    : <<description>>
 *
 * -----------------------------------------------------
 * Author         : Tanzim Ahmed
 * Email          : tanzimahmed077@gmail.com
 * -----------------------------------------------------
 * Last Modified  : Wed May 22 2024
 * Modified By    : Tanzim Ahmed
 * -----------------------------------------------------
 * Copyright (c) 2024 Tanzim Ahmed
 * -----------------------------------------------------
 */
import rateLimit from 'express-rate-limit';
import config from '../../config/index.js';

const { MAX_REQUEST_LIMIT } = config;
const limiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: parseInt(MAX_REQUEST_LIMIT),
  handler: (req, res) => {
    res.status(429).send({ error: 'Too many requests' });
  },
});

export default limiter;
