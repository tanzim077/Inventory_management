/*
 * File           : user.route.js
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
import { userController } from './user.controller.js';
const router = express.Router();
router.get('/get-all', handleAuthToken, userController.getAllDataFromDB);

router.post('/create', userController.createDataToDB);

router.patch('/update/:id', handleAuthToken, userController.updateDataByIdInDB);

router.delete('/delete/:id', handleAuthToken, userController.deleteDataByIdFromDB);

router.get('/get-single/:id', handleAuthToken, userController.getDataByIdFromDB);

export const UsersRoutes = router;
