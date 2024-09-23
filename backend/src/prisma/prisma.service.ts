// Este moduloo se llamara cada ves que se llama un servicio de prisma
// PrismaService actúa como un "puente" entre Prisma y el framework NestJS,
// simplificando el manejo de la base de datos en toda la aplicación.

import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
    async onModuleInit() {
        await this.$connect();
    }
}
