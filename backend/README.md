# Backend para Proyecto CRUD con NestJS

Este proyecto corresponde al backend de una aplicación CRUD, construido con **NestJS**. Utiliza **Prisma** para la conexión con la base de datos y **Swagger** para la documentación de la API. El objetivo del backend es manejar las operaciones de la aplicación, como la creación, lectura, actualización y eliminación de datos.

## Tecnologías utilizadas

### Dependencias principales:

- **NestJS (v10.0.0)**: Framework para construir aplicaciones del lado del servidor con Node.js, utilizando TypeScript y arquitectura modular.
  - **@nestjs/common**: Proporciona utilidades comunes dentro de la arquitectura de NestJS.
  - **@nestjs/core**: Núcleo del framework NestJS.
  - **@nestjs/platform-express**: Soporte para Express.js dentro de NestJS.
- **Prisma (v5.19.1)**: ORM para gestionar y consultar bases de datos.
- **Swagger**: Generación automática de documentación de la API.
  - **@nestjs/swagger (v7.4.2)**: Integración de Swagger con NestJS.
  - **swagger-ui-express (v5.0.1)**: Servidor de UI para visualizar y probar la API Swagger.
- **class-validator (v0.14.1)** y **class-transformer (v0.5.1)**: Utilizados para la validación y transformación de datos dentro de los DTOs (Data Transfer Objects).
- **rxjs (v7.8.1)**: Biblioteca para manejo de programación reactiva.
- **reflect-metadata (v0.2.0)**: Necesaria para las funcionalidades de metadatos en TypeScript.

### Dependencias de desarrollo:

- **TypeScript (v5.1.3)**: Superset de JavaScript que añade tipado estático opcional.
- **ESLint (v8.42.0)** y **Prettier (v3.0.0)**: Herramientas de análisis y formateo de código para garantizar la calidad y estilo del código.
- **Jest (v29.5.0)** y **Supertest (v7.0.0)**: Utilizados para la realización de pruebas unitarias y de integración.
- **Prisma**: Incluye las herramientas de desarrollo y CLI de Prisma.
- **NestJS CLI**: Herramienta para generar, construir y manejar la aplicación de NestJS.
- **ts-node** y **ts-jest**: Ejecutan TypeScript directamente en Node.js y permiten la transformación de código para las pruebas.

### Configuración de Jest:

Jest está configurado para realizar pruebas en archivos que terminen en `.spec.ts`. Las pruebas se ejecutan en un entorno de Node.js, y la cobertura se recolecta de todos los archivos `.ts` y `.js` en el proyecto.

## Funcionalidades principales

- **Operaciones CRUD**: La API permite realizar operaciones CRUD sobre los recursos del sistema.
- **Documentación automática**: La API cuenta con documentación generada automáticamente por Swagger.
- **Validación de datos**: Los datos enviados a través de la API se validan utilizando `class-validator` y se transforman usando `class-transformer`.
- **ORM Prisma**: Prisma se utiliza para interactuar con la base de datos de manera eficiente y tipada.

## Cómo iniciar el proyecto

Sigue los pasos para ejecutar este backend:

1. Clona el repositorio.
2. Instala las dependencias:
   ```bash
   npm install
