import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { EventEmitterModule } from '@nestjs/event-emitter';

@Module({
  imports: [
    PrismaModule,
    EventEmitterModule.forRoot({
      verboseMemoryLeak: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
