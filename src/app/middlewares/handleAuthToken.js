/*
 * File           : handleAuthToken.js
 * Project        : inventory-management
 * Created Date   : We 22 May 2024 05:04:57
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

import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';
import config from '../../config/index.js';

const prisma = new PrismaClient();

const handleAuthToken = async (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '');
    const decoded = jwt.verify(token, config.JWT_SECRET);
    const auth = await prisma.auth.findFirst({
      where: {
        token,
      },
    });

    if (!auth) {
      throw new Error('Invalid token');
    }
    const user = await prisma.user.findUnique({
      where: {
        id: decoded.id,
      },
    });
    if (!user) {
      throw new Error('Invalid user');
    }
    const timeNow = new Date();
    if (auth.expiresAt < timeNow) {
      throw new Error('Token expired');
    }
    req.auth = auth;
    req.user = user;
    next();
  } catch (error) {
    res.status(401).send({ error: error.message || 'Please authenticate' });
  }
};

export default handleAuthToken;
