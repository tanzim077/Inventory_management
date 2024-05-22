/*
 * File           : auth.service.js
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
import { userHelper } from '../user/user.helper.js';
const prisma = new PrismaClient();

const loginService = async (data) => {
  const result = await prisma.$transaction(async (prisma) => {
    const user = await prisma.user.findUnique({
      where: { email: data.email },
    });
    const isMatched = await userHelper.comparePassword(data.password, user.password);
    if (!isMatched) {
      throw new Error('Invalid login credentials');
    } else {
      const data = { email: user.email, id: user.id };
      const { token, expiresIn } = await userHelper.generateToken(data);
      const { password, ...userWithoutPassword } = user;
      const auth = await prisma.auth.findFirst({
        where: {
          userId: parseInt(user.id),
        },
      });
      if (auth) {
        await prisma.auth.update({
          where: {
            id: auth.id,
          },
          data: {
            token: token,
            expiresAt: expiresIn,
            createdAt: new Date(),
          },
        });
      } else {
        await prisma.auth.create({
          data: {
            token: token,
            expiresAt: expiresIn,
            userId: user.id,
          },
        });
      }

      return { user: userWithoutPassword, token };
    }
  });
  return result;
};

const logOutService = async (req) => {
  const { id } = req.user;
  const auth = await prisma.auth.findFirst({
    where: {
      userId: parseInt(id),
    },
  });
  if (auth) {
    await prisma.auth.delete({
      where: {
        id: auth.id,
      },
    });
  } else {
    throw new Error('User not found');
  }
  return { user: req.user };
};
const logOutAllService = async (id, data) => {
  const product = await prisma.product.update({ where: { id: id }, data });
  return { product };
};
export const authService = {
  loginService,
  logOutService,
  logOutAllService,
};
