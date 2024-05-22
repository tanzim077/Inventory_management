/*
 * File           : index.js
 * Project        : inventory-management
 * Created Date   : Tu 21 May 2024 05:24:33
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
import handleAuthToken from '../middlewares/handleAuthToken.js';
import { AuthRoutes } from '../modules/auth/auth.route.js';
import { OrderRoutes } from '../modules/order/order.route.js';
import { ProductRoutes } from '../modules/product/product.route.js';
import { UsersRoutes } from '../modules/user/user.route.js';
const router = express.Router();

const moduleRoutes = [
  {
    path: '/user',
    route: UsersRoutes,
    middleWare: [],
  },
  {
    path: '/product',
    route: ProductRoutes,
    middleWare: [handleAuthToken],
  },
  {
    path: '/order',
    route: OrderRoutes,
    middleWare: [handleAuthToken],
  },
  {
    path: '/auth',
    route: AuthRoutes,
    middleWare: [],
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.middleWare, route.route));
export default router;
