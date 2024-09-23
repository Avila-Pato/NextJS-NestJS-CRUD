import { Product } from "@prisma/client";


import { IsNumber, IsString } from 'class-validator';

export class CreateProductDto implements Omit<Product, 'id' | 'createdAt' | 'updatedAt'> {
 
  @IsString()  
  description: string;
  
  @IsString()
  name: string;

  @IsNumber()
  price: number;

  @IsString()
  image: string;
}
