import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ExampleEntity } from './example.entity';
import { Repository } from 'typeorm';
import { randomUUID } from "node:crypto";
import * as process from 'node:process';

@Injectable()
export class ExampleService {
  constructor(
    @InjectRepository(ExampleEntity)
    private readonly exampleRepository: Repository<ExampleEntity>
  ) {}

  async readLink(key: string) {
    const example = await this.exampleRepository.findOne({
      where: { key, isUsed: false }
    });
    if (!example) {
      throw new BadRequestException();
    }
    example.isUsed = true;
    await this.exampleRepository.save(example);

    return example.info;
  }

  async createLink(info: string) {
    const example = this.exampleRepository.create({
      key: randomUUID(),
      isUsed: false,
      info,
    });
    const savedExample = await this.exampleRepository.save(example)

    return `http://localhost:${process.env.PORT}/example/${savedExample.key}`;
  }
}
