import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class ProductsService {

  constructor(private prismaService: PrismaService) {}

  async create(createProductDto: CreateProductDto) {
    try { 
      const createProduct = await this.prismaService.product.create({
        // Create esta dentro de la propiedad data
        data: createProductDto,
      })
      console.log(createProductDto);
      return createProduct;
    } catch (error) {
      console.log(error);
      if(error instanceof Prisma.PrismaClientKnownRequestError) {
       if(error.code === 'P2002') {
        throw new NotFoundException(`Product with name ${createProductDto.name} already exists`);
      }        
     }
     throw new Error('Error creating product');
    }
  }

  findAll() {
    return this.prismaService.product.findMany();
  }
  // . Este tipo de operaciones generalmente
  // son asíncronas porque pueden tomar tiempo (dependiendo de factores como la velocidad 
  // de la red, el tamaño de los datos, etc.).
    async findOne(id: number) {
     const ProductFound = await this.prismaService.product.findUnique({
      where: {
        id: id,
      },
    });
    if (!ProductFound) {
      throw new NotFoundException(`Product with id ${id} not found`);
    }
    //  si el producto si existe retornamos el producto
    return ProductFound;
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
     const ProductFoundUpdate = await this.prismaService.product.update({
      where: {
        id: id,
      },
      data: updateProductDto,
    });
    if (!ProductFoundUpdate) {
      throw new NotFoundException(`Product with id ${id} not found`);
    }
    return ProductFoundUpdate;
  }




  async remove(id: number) {
    const ProductFoundDelete = await this.prismaService.product.findUnique({
      where: {
        id: id,
      },
    });
    if (!ProductFoundDelete) {
      throw new NotFoundException(`Product with id ${id} not found`);
    }
    return ProductFoundDelete;
  }
}

