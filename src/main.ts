import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import express from 'express';
import { ExpressAdapter } from '@nestjs/platform-express';
import { Server } from 'http';

const expressApp = express();
let server: Server | undefined;

async function bootstrap() {
  const app = await NestFactory.create(
    AppModule,
    new ExpressAdapter(expressApp),
  );

  app.enableCors({
    origin: ['http://localhost:5173', 'https://thegoodegg.on.fleek.co'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  await app.init();
  server = app.getHttpServer();
}

bootstrap();

// Vercel handler
export default async (req, res) => {
  if (!server) {
    await bootstrap();
  }

  server.emit('request', req, res);
};
