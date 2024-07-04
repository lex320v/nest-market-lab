import { INestApplication, ValidationPipe } from '@nestjs/common';
import { AppModule } from '../src/app.module';
import { Test } from '@nestjs/testing';
import * as request from 'supertest';
import { CreateLinkDto } from '../src/example/dto/createLink.dto';

describe('Example', () => {
  let app: INestApplication;
  const example: CreateLinkDto = { info: 'info' };

  beforeAll(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('/example (POST) 201', async () => {
    const res = await request(app.getHttpServer())
      .post('/example')
      .send(example);

    expect(res.statusCode).toBe(201);
    expect(res.text).not.toBeNull();
  });

  it('/example (POST) 400', async () => {
    const res = await request(app.getHttpServer())
      .post('/example');

    expect(res.statusCode).toBe(400);
  });

  it('/example (GET) 200', async () => {
    const createdLink = await request(app.getHttpServer())
      .post('/example')
      .send(example);
    const key = createdLink.text.split('/')[4];

    const info = await request(app.getHttpServer())
      .get('/example/' + key);

    expect(info.statusCode).toBe(200);
    expect(info.text).toEqual(example.info);
  });

  it('/example (GET) 400', async () => {
    const createdLink = await request(app.getHttpServer())
      .post('/example')
      .send(example);
    const key = createdLink.text.split('/')[4];

    await request(app.getHttpServer()).get('/example/' + key);

    const info = await request(app.getHttpServer())
      .get('/example/' + key);

    expect(info.statusCode).toBe(400);
  });

  afterAll(async () => {
    await app.close();
  });
});
