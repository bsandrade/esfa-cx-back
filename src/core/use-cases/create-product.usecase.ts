import { CreateProductDto } from '@infra/mongo/dtos/create-product.dto';
import { ProductRepository } from '@infra/mongo/repositories';
import { BadRequestException, Injectable } from '@nestjs/common';
import { v4 } from 'uuid';

@Injectable()
export class CreateProductUsecase {
  constructor(private readonly _productMongo: ProductRepository) {}

  async execute(input: Omit<CreateProductDto, 'id'>) {
    const validInput =
      input.type === 'both' || input.type === 'food' || input.type === 'drink';
    if (!validInput) {
      throw new BadRequestException('Tipo inválido');
    }

    if (input.oldPrice && input.oldPrice <= input.price) {
      throw new BadRequestException(
        'Preço de desconto precisa ser menor que o preço original',
      );
    }

    const nameUpper = input.name.toUpperCase();
    const productExists = await this._productMongo.getByName(nameUpper);
    if (productExists) {
      throw new BadRequestException('Produto já existe');
    }

    const id = v4();
    return await this._productMongo.create({
      id,
      ...input,
      name: nameUpper,
    });
  }
}
