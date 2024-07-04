import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ExampleService } from './example.service';

@Controller('example')
export class ExampleController {
  constructor(private readonly exampleService: ExampleService) {}

  @Get('/:key')
  readLink(@Param('key') key: string) {
    return this.exampleService.readLink(key);
  }

  @Post()
  createLink(@Body('info') info: string) {
    return this.exampleService.createLink(info);
  }
}
