import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor() {
    throw new Error('AppService initialization failed');
  }

  root(): string {
    return 'Hello World!';
  }
}
