// import { PartialType } from '@nestjs/mapped-types';
// import { CreateProductDto } from './create-product.dto';
// import { UpdateProductDto } from './update-product.dto';
// export class UpdateProductDto extends PartialType(CreateProductDto) {}
// para resolver esto ahi que heredarle la clase 

//  de esta forma se pueden actualizar los campos parcialmente
import { CreateProductDto } from "./create-product.dto";
export type UpdateProductDto = Partial<CreateProductDto>;
