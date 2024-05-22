/*
 * File           : user.controller.js
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
import { userService } from './user.service.js';

const getAllDataFromDB = handleTryCatch(async (req, res, next) => {
  const { users } = await userService.getAllDataService();
  handleResponse({ res, statusCode: 200, status: 'success', message: 'User fetched successfully', data: users });
});

const createDataToDB = handleTryCatch(async (req, res, next) => {
  const { user } = await userService.createDataService(req.body);
  handleResponse({ res, statusCode: 201, status: 'success', message: 'User created successfully', data: user });
});

const updateDataByIdInDB = handleTryCatch(async (req, res, next) => {
  const { user } = await userService.updateDataByIdService(parseInt(req.params.id), req.body);
  handleResponse({ res, statusCode: 200, status: 'success', message: 'User updated successfully', data: user });
});

const deleteDataByIdFromDB = handleTryCatch(async (req, res, next) => {
  const { user } = await userService.deleteDataByIdService(parseInt(req.params.id));
  handleResponse({ res, statusCode: 200, status: 'success', message: 'User deleted successfully', data: user });
});

const getDataByIdFromDB = handleTryCatch(async (req, res, next) => {
  const { user } = await userService.getDataByIdService(parseInt(req.params.id));
  handleResponse({ res, statusCode: 200, status: 'success', message: 'User fetched successfully', data: user });
});

export const userController = {
  getAllDataFromDB,
  createDataToDB,
  updateDataByIdInDB,
  deleteDataByIdFromDB,
  getDataByIdFromDB,
};
