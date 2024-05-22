/*
 * File           : auth.controller.js
 * Project        : inventory-management
 * Created Date   : Tu 21 May 2024 05:03:45
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

import handleResponse from '../../middlewares/hadleResponse.js';
import handleTryCatch from '../../middlewares/handleCatch.js';
import { authService } from './auth.service.js';

const login = handleTryCatch(async (req, res, next) => {
  const { user, token } = await authService.loginService(req.body);
  res.set('Authorization', `Bearer ${token}`);
  handleResponse({
    res,
    statusCode: 200,
    status: 'success',
    message: 'Log in successfully',
    data: { user, token },
  });
});

const logout = handleTryCatch(async (req, res, next) => {
  await authService.logOutService(req);
  handleResponse({ res, statusCode: 201, status: 'success', message: 'Log out successfully' });
});

export const authController = {
  login,
  logout,
};
