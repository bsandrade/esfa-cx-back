import { CreateApiDto } from '@infra/mongo/dtos/create-api.dto';
import { ApiRepository } from '@infra/mongo/repositories';
import { BadRequestException, Injectable } from '@nestjs/common';
import { v4 } from 'uuid';

@Injectable()
export class CreateApiUsecase {
  constructor(private readonly _apiMongo: ApiRepository) {}

  async execute({ name }: Omit<CreateApiDto, 'key'>) {
    const nameUpper = name.toUpperCase();
    const apiExists = await this._apiMongo.getByName(nameUpper);
    if (apiExists) {
      throw new BadRequestException('Api existente');
    }

    return await this._apiMongo.create({
      key: v4(),
      name: nameUpper,
    });
  }
}
