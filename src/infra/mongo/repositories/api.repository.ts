import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { ApiModel, ApiModelDocument } from '../entities/api.entity';
import { InjectModel } from '@nestjs/mongoose';
import { ApiMapper } from '../mappers/api.mapper';
import { CreateApiDto } from '../dtos/create-api.dto';

@Injectable()
export class ApiRepository {
  constructor(
    @InjectModel(ApiModel.name)
    private readonly _apiModel: Model<ApiModelDocument>,
  ) {}

  async create(input: CreateApiDto) {
    const doc = await this._apiModel.create(input);
    return ApiMapper.toDomain(doc);
  }

  async all() {
    const docs = await this._apiModel.find();
    return docs.map((doc) => ApiMapper.toDomain(doc));
  }

  async getByKey(key: string) {
    const doc = await this._apiModel.findOne({ key });
    if (doc) {
      return ApiMapper.toDomain(doc);
    }

    return undefined;
  }

  async getByName(name: string) {
    const doc = await this._apiModel.findOne({ name });
    if (doc) {
      return ApiMapper.toDomain(doc);
    }

    return undefined;
  }
}
