import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configuración de CORS (CORS es un mecanismo que permite que 
  // los recursos de un servidor web sean solicitados desde un dominio diferente)
  app.enableCors();
  
  // Configuración de prefijo global
  app.setGlobalPrefix('api');

  // Configuración de Swagger
  const config = new DocumentBuilder()
    .setTitle('API de ejemplo')
    .setDescription('Documentación de la API de ejemplo')
    .setVersion('1.0')
    .build();
    
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // Habilitar la validación global
  app.useGlobalPipes(new ValidationPipe({
    transform: true, // Convierte los datos de entrada a las instancias de clases
    whitelist: true, // Elimina propiedades que no están definidas en la clase DTO
    forbidNonWhitelisted: true, // Lanza un error si se envían propiedades no definidas
  }));

  await app.listen(4000);
}
bootstrap();
