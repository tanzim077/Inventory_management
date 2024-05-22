/*
 * File           : order.controller.js
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
import { orderService } from './order.service.js';

const getAllDataFromDB = handleTryCatch(async (req, res, next) => {
  const { orders } = await orderService.getAllDataService();
  handleResponse({ res, statusCode: 200, status: 'success', message: 'Orders fetched successfully', data: orders });
});

const createDataToDB = handleTryCatch(async (req, res, next) => {
  const { order } = await orderService.createDataService(req);
  handleResponse({ res, statusCode: 201, status: 'success', message: 'order created successfully', data: order });
});

const updateDataByIdInDB = handleTryCatch(async (req, res, next) => {
  const { order } = await orderService.updateDataByIdService(parseInt(req.params.id), req.body);
  handleResponse({ res, statusCode: 200, status: 'success', message: 'order updated successfully', data: order });
});

const deleteDataByIdFromDB = handleTryCatch(async (req, res, next) => {
  const { order } = await orderService.deleteDataByIdService(parseInt(req.params.id));
  handleResponse({ res, statusCode: 200, status: 'success', message: 'order deleted successfully', data: order });
});

const getDataByIdFromDB = handleTryCatch(async (req, res, next) => {
  const { order } = await orderService.getDataByIdService(parseInt(req.params.id));
  handleResponse({ res, statusCode: 200, status: 'success', message: 'order fetched successfully', data: order });
});

const getMyOrderFromDB = handleTryCatch(async (req, res, next) => {
  const { order } = await orderService.getMyOrderFromDBService(req);
  handleResponse({ res, statusCode: 200, status: 'success', message: 'My Order fetched successfully', data: order });
});

export const orderController = {
  getAllDataFromDB,
  createDataToDB,
  updateDataByIdInDB,
  deleteDataByIdFromDB,
  getDataByIdFromDB,
  getMyOrderFromDB,
};
