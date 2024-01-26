import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ProductModel, ProductModelDocument } from '../entities/product.entity';
import { Model } from 'mongoose';
import { CreateProductDto } from '../dtos/create-product.dto';
import { ProductMapper } from '../mappers/product.mapper';
import { UpdateProductDto } from '../dtos/update-product.dto';

@Injectable()
export class ProductRepository {
  constructor(
    @InjectModel(ProductModel.name)
    private _productModel: Model<ProductModelDocument>,
  ) {}

  async create(input: CreateProductDto) {
    const doc = await this._productModel.create(input);
    return ProductMapper.toDomain(doc);
  }

  async all() {
    const docs = await this._productModel.find().exec();
    return docs.map((doc) => ProductMapper.toDomain(doc));
  }

  async getById(id: string) {
    const doc = await this._productModel.findOne({ id });
    if (doc) {
      return ProductMapper.toDomain(doc);
    }
    return undefined;
  }

  async getByName(name: string) {
    const doc = await this._productModel.findOne({ name });
    if (doc) {
      return ProductMapper.toDomain(doc);
    }
    return undefined;
  }

  async delete(id: string) {
    await this._productModel.deleteOne({ id });
  }

  async update({ id, name, oldPrice, price, type }: UpdateProductDto) {
    await this._productModel.updateOne(
      {
        id,
      },
      {
        $set: {
          name,
          oldPrice,
          price,
          type,
        },
      },
    );
  }
}
