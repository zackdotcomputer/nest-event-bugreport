import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProxyModule } from './proxy/proxy.module';
import { EventEmitterModule } from '@nestjs/event-emitter';

@Module({
  imports: [
    ProxyModule,
    EventEmitterModule.forRoot({
      verboseMemoryLeak: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
