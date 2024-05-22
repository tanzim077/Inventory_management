/*
 * File           : user.helper.js
 * Project        : inventory-management
 * Created Date   : We 22 May 2024 01:23:43
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
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import config from '../../../config/index.js';
const hashPassword = async (password) => {
  return await bcrypt.hash(password, 10);
};

const comparePassword = async (password, hash) => {
  return await bcrypt.compare(password, hash);
};

const generateToken = async (data) => {
  const token = jwt.sign(data, config.JWT_SECRET, {
    algorithm: 'HS256',
    expiresIn: '1h',
  });
  const expiresIn = new Date(Date.now() + 60 * 60 * 1000);
  return { token, expiresIn };
};

// Exclude keys from user
function exclude(user, keys) {
  return Object.fromEntries(Object.entries(user).filter(([key]) => !keys.includes(key)));
}
function excludeAll(users, keys) {
  return users.map((user) => exclude(user, keys));
}
export const userHelper = {
  hashPassword,
  comparePassword,
  generateToken,
  exclude,
  excludeAll,
};
