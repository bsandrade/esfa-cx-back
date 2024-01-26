import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductModel } from './models/create-product.model';
import { UpdateProductModel } from './models/update-product.model';
import { JwtAdminAuthGuard } from '@shared/guards/jwt-admin/jwt-admin.guard';

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

  @UseGuards(JwtAdminAuthGuard)
  @Post()
  async create(@Body() input: CreateProductModel) {
    return await this._productService.create(input);
  }

  @UseGuards(JwtAdminAuthGuard)
  @Put(':id')
  async update(@Param('id') id: string, @Body() input: UpdateProductModel) {
    return await this._productService.update({
      id,
      ...input,
    });
  }

  @UseGuards(JwtAdminAuthGuard)
  @Delete(':id')
  async delete(@Param('id') id: string) {
    await this._productService.delete(id);
  }
}
