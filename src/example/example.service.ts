import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ExampleEntity } from './example.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ExampleService {
  constructor(
    @InjectRepository(ExampleEntity)
    private readonly exampleEntity: Repository<ExampleEntity>
  ) {}

  readLink(key: string) {
    return key;
  }

  createLink(info: string) {
    return info;
  }
}
