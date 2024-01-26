import { CreateApiUsecase } from '@core/use-cases/create-api.usecase';
import { CreateApiDto } from '@infra/mongo/dtos/create-api.dto';
import { ApiRepository } from '@infra/mongo/repositories';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ApiService {
  constructor(
    private readonly _createApiUsecase: CreateApiUsecase,
    private readonly _apiMongo: ApiRepository,
  ) {}

  async create(input: Omit<CreateApiDto, 'key'>) {
    return await this._createApiUsecase.execute(input);
  }

  async all() {
    return await this._apiMongo.all();
  }
}
