import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ExampleService } from './example.service';
import { IsNotEmpty } from 'class-validator';
import { CreateLinkDto } from './dto/createLink.dto';

@Controller('example')
export class ExampleController {
  constructor(private readonly exampleService: ExampleService) {}

  @Get('/:key')
  readLink(@Param('key') key: string) {
    return this.exampleService.readLink(key);
  }

  @Post()
  createLink(@Body() createLinkDto: CreateLinkDto) {
    return this.exampleService.createLink(createLinkDto.info);
  }
}
