import { INestApplication, Injectable } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

@Injectable()
export class SwaggerDocumentationProvider {
  public setup(app: INestApplication): void {
    const config = new DocumentBuilder()
      .setTitle('super-frete-api')
      .setDescription('API integrate with firebase ')
      .setContact(
        'Gabriel Lima',
        'https://github.com/gabrielnode',
        'gabriiel.lima.br@gmail.com',
      )
      .addServer('http://localhost:3000', 'development')
      .setVersion('1.0')
      .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);
  }
}
