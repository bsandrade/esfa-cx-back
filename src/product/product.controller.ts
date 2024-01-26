import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductModel } from './models/create-product.model';
import { UpdateProductModel } from './models/update-product.model';

@Controller({
  version: '1',
  path: 'products',
})
export class ProductController {
  constructor(private readonly _productService: ProductService) {}

  @Get()
  async getAll() {
    return await this._productService.all();
  }

  @Post()
  async create(@Body() input: CreateProductModel) {
    return await this._productService.create(input);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() input: UpdateProductModel) {
    return await this._productService.update({
      id,
      ...input,
    });
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    await this._productService.delete(id);
  }
}
