import {
  DocumentBuilder,
  SwaggerDocumentOptions,
  SwaggerModule,
} from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';

export default (app: INestApplication) => {
  const options: SwaggerDocumentOptions = {};
  const config = new DocumentBuilder()
    .setTitle('Mincuru API')
    .setDescription('みんクルAPI')
    .setVersion('1.0')
    .build();
  return SwaggerModule.createDocument(app, config, options);
};
