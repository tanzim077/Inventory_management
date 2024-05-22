/*
 * File           : inventory.service.js
 * Project        : inventory-management
 * Created Date   : Tu 21 May 2024 05:03:54
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

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const createDataService = async (data) => {
  const product = await prisma.product.create({ data });
  return { product };
};

const getAllDataService = async () => {
  const products = await prisma.product.findMany();
  return { products };
};
const updateDataByIdService = async (id, data) => {
  const product = await prisma.product.update({ where: { id: id }, data });
  return { product };
};
// delete product and all orders related to the product
const deleteDataByIdService = async (id) => {
  const result = await prisma.$transaction(async (prisma) => {
    await prisma.order.deleteMany({ where: { productId: id } });
    const product = await prisma.product.delete({ where: { id: id } });
    return { product };
  });
  return result;
};
const getDataByIdService = async (id) => {
  const product = await prisma.product.findUnique({
    where: { id: id },
  });
  return { product };
};

export const productService = {
  createDataService,
  getAllDataService,
  updateDataByIdService,
  deleteDataByIdService,
  getDataByIdService,
};
