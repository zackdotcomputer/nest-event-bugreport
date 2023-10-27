import { Module } from '@nestjs/common';
import { BaseProxyService, ProxyService } from './proxy.service';

export const PROXY_INJECTION_TOKEN = 'PROXY_INJECTION_TOKEN';

@Module({
  providers: [
    {
      provide: PROXY_INJECTION_TOKEN,
      useFactory(): ProxyService {
        return new BaseProxyService().extended();
      },
    },
  ],
})
export class ProxyModule {}
