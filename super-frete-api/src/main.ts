import { NestFactory } from '@nestjs/core';
import { initializeFirebase } from '@shared/config/firebase.config';
import { AppModule } from '@shared/infra/app.module';
import { SwaggerDocumentationProvider } from '@swaggerDocumentation/application/providers/swagger-documentation.provider';
import { SWAGGER_DOCUMENTATION_PROVIDER_TOKEN } from '@swaggerDocumentation/infrastructure/module/ioc-tokens/swagger-documentation.ioc.tokens';

initializeFirebase();

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  const swaggerProvider = app.get<SwaggerDocumentationProvider>(
    SWAGGER_DOCUMENTATION_PROVIDER_TOKEN,
  );

  swaggerProvider.setup(app);
  await app.listen(3000);
}
bootstrap();
