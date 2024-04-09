import { NestFactory } from '@nestjs/core';
import { initializeFirebase } from '@shared/config/firebase.config';
import { AppModule } from '@shared/infra/app.module';

initializeFirebase();

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
