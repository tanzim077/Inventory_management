/*
 * File           : order.route.js
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
import { orderController } from './order.controller.js';
const router = express.Router();

router.get('/get-all', orderController.getAllDataFromDB);

router.post('/create', orderController.createDataToDB);

router.patch('/update/:id', orderController.updateDataByIdInDB);

router.delete('/delete/:id', orderController.deleteDataByIdFromDB);

router.get('/get-single/:id', orderController.getDataByIdFromDB);

router.get('/get-my-order', orderController.getMyOrderFromDB);

export const OrderRoutes = router;
