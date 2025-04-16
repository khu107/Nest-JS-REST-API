# NestJS - class-validator 정리

## 📌 class-validator란?

NestJS에서 사용하는 유효성 검사 라이브러리.  
DTO 클래스에 데코레이터를 이용해 유효성 검사를 선언적으로 정의할 수 있음.

- 사용자 입력값 검증
- 타입 안정성 확보
- 코드 유지보수 용이
- NestJS의 `ValidationPipe`와 함께 사용

---

class-validator 를 사용라기 위해 main.ts 등록 // app.useGlobalPipes(new ValidationPipe());

```node
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
```

## 🛠️ 설치 방법

```bash
npm install class-validator class-transformer
```
