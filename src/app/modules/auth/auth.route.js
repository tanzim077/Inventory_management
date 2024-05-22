/*
 * File           : auth.route.js
 * Project        : inventory-management
 * Created Date   : Tu 21 May 2024 05:03:36
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

import express from 'express';
import handleAuthToken from '../../middlewares/handleAuthToken.js';
import { authController } from './auth.controller.js';

const router = express.Router();

router.post('/log-in', authController.login);

router.get('/log-out', handleAuthToken, authController.logout);

export const AuthRoutes = router;
