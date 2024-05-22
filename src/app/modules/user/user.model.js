/*
 * File           : user.model.js
 * Project        : inventory-management
 * Created Date   : We 22 May 2024 12:04:08
 * Description    : <<description>>
 *
 * -----------------------------------------------------
 * Author         : Tanzim Ahmed
 * Email          : tanzimahmed077@gmail.com
 * -----------------------------------------------------
 * Last Modified  : Wed May 22 2024
 * Modified By    : Tanzim Ahmed
 * -----------------------------------------------------
 * Copyright (c) 2024 Tanzim Ahmed
 * -----------------------------------------------------
 */
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient().$extends({
  model: {
    user: {
      async signUp(email, password) {
        const hash = await bcrypt.hash(password, 10);
        return prisma.user.create({
          data: {
            email,
            password: {
              create: {
                hash,
              },
            },
          },
        });
      },

      async findManyByDomain(domain) {
        return prisma.user.findMany({
          where: { email: { endsWith: `@${domain}` } },
        });
      },
    },
  },
});


