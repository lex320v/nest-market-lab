import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExampleModule } from './example/example.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import typeorm from './config/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeorm),
    ExampleModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
