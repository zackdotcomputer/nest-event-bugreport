import { Module } from '@nestjs/common';
import { BasePrismaService, PrismaService } from './prisma.service';

export const PRISMA_INJECTION_TOKEN = 'PRISMA_INJECTION_TOKEN';

@Module({
  providers: [
    {
      provide: PRISMA_INJECTION_TOKEN,
      useFactory(): PrismaService {
        return new BasePrismaService().extended();
      },
    },
  ],
})
export class PrismaModule {}
