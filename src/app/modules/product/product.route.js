/*
 * File           : inventory.route.js
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
import { productController } from './product.controller.js';
const router = express.Router();

router.get('/get-all', productController.getAllDataFromDB);

router.post('/create', productController.createDataToDB);

router.patch('/update/:id', productController.updateDataByIdInDB);

router.delete('/delete/:id', productController.deleteDataByIdFromDB);

router.get('/get-single/:id', productController.getDataByIdFromDB);

export const ProductRoutes = router;
