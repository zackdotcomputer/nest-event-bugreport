export type ProxyService = ReturnType<BaseProxyService['extended']>;

export class BaseProxyService {
  world() {
    return 'world';
  }

  extended() {
    return new Proxy(this, {
      get(target, prop) {
        if (prop === 'world') return 'hello';
        if (target[prop]) return target[prop];
      },
    });
  }
}
