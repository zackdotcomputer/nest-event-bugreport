import { PrismaClient } from '@prisma/client';

export type PrismaService = ReturnType<BasePrismaService['extended']>;

export class BasePrismaService
  extends PrismaClient
{
  extended() {
    return this.$extends({
      model: {},
    });
  }
}
