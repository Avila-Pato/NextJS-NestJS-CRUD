# API REST con NestJS y Prisma

Esta es una API REST desarrollada con NestJS y Prisma, diseñada para gestionar productos. La API incluye validaciones de entrada, manejo de errores, y documentación utilizando Swagger.

## Tecnologías Utilizadas

- **NestJS**: Framework para construir aplicaciones del lado del servidor.
- **Prisma**: ORM para gestionar la base de datos.
- **MySQL/PostgreSQL**: Base de datos utilizada para almacenar la información.
- **Swagger**: Herramienta para la documentación de la API.
- **class-validator** y **class-transformer**: Librerías para validar y transformar los datos de entrada.

## Esquema 

1. Configura la base de datos en el archivo `.env`:

   Asegúrate de tener la variable `DATABASE_URL` configurada correctamente para tu base de datos.

2. Ejecuta las migraciones de Prisma:

   ```bash
   npx prisma migrate dev --name init
   ```

3. Inicia el servidor:

   ```bash
   npm run start
   ```

## CORS

La API tiene CORS habilitado, lo que permite que aplicaciones frontales en diferentes dominios accedan a ella. Esto se configura en el archivo `main.ts`:

```typescript
app.enableCors();
```

## Rutas de la API

### Base URL

```
http://localhost:4000/api
```

### Endpoints

- **POST /products**
  - Crea un nuevo producto.
  - Requiere un cuerpo con el siguiente formato:
    ```json
    {
      "name": "Nombre del producto",
      "price": 100.00,
      "image": "URL de la imagen"
    }
    ```

### Documentación de Swagger

La documentación de la API está disponible en:

```
http://localhost:4000/api
```

## Validación de Entrada

Se utilizan DTOs (Data Transfer Objects) junto con `class-validator` para validar los datos de entrada. Esto asegura que solo se acepten datos válidos.

