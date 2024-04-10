// src/app.module.ts
import { Module } from '@nestjs/common';
import { SwaggerDocumentationModule } from '@swaggerDocumentation/infrastructure/module/swagger-documentation.module';
import { UserModule } from '@users/infra/module/user.module';

@Module({
  imports: [SwaggerDocumentationModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
