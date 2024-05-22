/*
 * File           : order.service.js
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

const createDataService = async (req) => {
  /* transaction to ensure that the order is created 
      only if the product is available in stock and the
      product stock is decremented
  */
  const result = await prisma.$transaction(async (prisma) => {
    const data = req.body;
    const user = req.user;

    const product = await prisma.product.findUnique({
      where: { id: data.productId },
    });
    if (!product) {
      throw new Error('Product not found');
    }

    if (product.itemsAvailable <= 0) {
      throw new Error('Product is out of stock');
    }

    const order = await prisma.order.create({
      data: {
        user: { connect: { id: user.id } },
        product: { connect: { id: data.productId } },
      },
    });

    await prisma.product.update({
      where: { id: data.productId },
      data: { itemsAvailable: { decrement: 1 } },
    });

    return { order };
  });
  return result;
};

const getAllDataService = async () => {
  const orders = await prisma.order.findMany();
  return { orders };
};

const updateDataByIdService = async (id, data) => {
  /* transaction to ensure that the order is created 
      only if the product is available in stock and the
      product stock is decremented
  */
  const result = await prisma.$transaction(async (prisma) => {
    const { status } = data;
    const order = await prisma.order.findUnique({ where: { id: id } });
    if (!order) {
      throw new Error('Order not found');
    }
    if (order.status === 'delivered') {
      throw new Error('Order already delivered');
    }

    if (status === 'delivered') {
      const order = await prisma.order.update({
        where: { id: id },
        data: { status: status },
      });
      return { order };
    }
    if (status === 'cancelled') {
      await prisma.product.update({
        where: { id: order.productId },
        data: { itemsAvailable: { increment: 1 } },
      });
      const updatedOrder = await prisma.order.update({
        where: { id: id },
        data: { status: status },
      });
      return { order: updatedOrder };
    }
    throw new Error('Invalid status');
  });
  return result;
};

const deleteDataByIdService = async (id) => {
  const order = await prisma.order.delete({ where: { id: id } });
  return { order };
};

const getDataByIdService = async (id) => {
  const order = await prisma.order.findUnique({
    where: { id: id },
  });
  return { order };
};

const getMyOrderFromDBService = async (req) => {
  const { id } = req.user;
  // populate the product field
  const order = await prisma.order.findMany({
    where: { userId: id },
    include: {
      product: true,
    },
  });
  return { order };
};

export const orderService = {
  createDataService,
  getAllDataService,
  updateDataByIdService,
  deleteDataByIdService,
  getDataByIdService,
  getMyOrderFromDBService,
};
