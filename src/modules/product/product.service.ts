import { CreateProductUsecase, UpdateProductUsecase } from '@core/use-cases';
import { CreateProductDto } from '@infra/mongo/dtos/create-product.dto';
import { UpdateProductDto } from '@infra/mongo/dtos/update-product.dto';
import { ProductRepository } from '@infra/mongo/repositories';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
  constructor(
    private readonly _createProductUsecase: CreateProductUsecase,
    private readonly _updateProductUsecase: UpdateProductUsecase,
    private readonly _productMongo: ProductRepository,
  ) {}

  async create(input: Omit<CreateProductDto, 'id'>) {
    return await this._createProductUsecase.execute(input);
  }

  async all() {
    const products = await this._productMongo.all();
    return {
      products,
    };
  }

  async delete(id: string) {
    await this._productMongo.delete(id);
  }

  async update(input: UpdateProductDto) {
    return await this._updateProductUsecase.execute(input);
  }
}
