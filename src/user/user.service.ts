import { CreateUserDto } from '@infra/mongo/dtos/create-user.dto';
import { UserRepository } from '@infra/mongo/repositories';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor(private readonly _userMongo: UserRepository) {}

  async listAll() {
    return await this._userMongo.all();
  }

  async create(input: CreateUserDto) {
    return await this._userMongo.create(input);
  }
}
