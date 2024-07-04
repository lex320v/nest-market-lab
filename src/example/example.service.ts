import { Injectable } from '@nestjs/common';

@Injectable()
export class ExampleService {

  readLink(key: string) {
    return key;
  }

  createLink(info: string) {
    return info;
  }
}
