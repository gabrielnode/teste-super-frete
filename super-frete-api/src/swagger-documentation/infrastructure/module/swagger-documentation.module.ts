import { Module } from '@nestjs/common';
import { SWAGGER_DOCUMENTATION_PROVIDER_TOKEN } from './ioc-tokens/swagger-documentation.ioc.tokens';
import { SwaggerDocumentationProvider } from '@swaggerDocumentation/application/providers/swagger-documentation.provider';

@Module({
  imports: [],
  providers: [
    {
      provide: SWAGGER_DOCUMENTATION_PROVIDER_TOKEN,
      useClass: SwaggerDocumentationProvider,
    },
  ],
})
export class SwaggerDocumentationModule {}
