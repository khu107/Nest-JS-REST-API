import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      // 우리가 정의 하지 않은 값들을 전달 안 해준다. filtter qilib beradi.
      whitelist: true,

      // 있으면 안 되는 property가 있으면 에러 낸다.
      forbidNonWhitelisted: true,
    }),
  );
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
