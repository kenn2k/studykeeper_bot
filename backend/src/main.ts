import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: [process.env.NEXT_BASE_URL],
    credentials: true,
    exposedHeaders: 'set-cookie',
  });

  app.setGlobalPrefix('api');
  app.use(cookieParser());

  await app.listen(process.env.PORT || 4000);
}
bootstrap();
