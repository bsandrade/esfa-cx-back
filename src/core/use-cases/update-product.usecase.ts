import { CreateProductDto } from '@infra/mongo/dtos/create-product.dto';
import { UpdateProductDto } from '@infra/mongo/dtos/update-product.dto';
import { ProductRepository } from '@infra/mongo/repositories';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

@Injectable()
export class UpdateProductUsecase {
  constructor(private readonly _productMongo: ProductRepository) {}

  async execute(input: UpdateProductDto) {
    if (input.type) {
      const validInput =
        input.type === 'both' ||
        input.type === 'food' ||
        input.type === 'drink';
      if (!validInput) {
        throw new BadRequestException('Tipo inválido');
      }
    }

    if (input.name) {
      input.name = input.name.toUpperCase();
    }
    const productExists = await this._productMongo.getById(input.id);
    if (!productExists) {
      throw new NotFoundException('Produto não encontrado');
    }

    return await this._productMongo.update({
      ...input,
      oldPrice: input.oldPrice ? input.oldPrice : null,
    });
  }
}
