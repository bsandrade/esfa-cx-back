import { CreateUserUsecase } from '@core/use-cases';
import { CreateUserDto } from '@infra/mongo/dtos/create-user.dto';
import { UpdateUserDto } from '@infra/mongo/dtos/update-user.dto';
import { UserRepository } from '@infra/mongo/repositories';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor(
    private readonly _userMongo: UserRepository,
    private readonly _createUser: CreateUserUsecase,
  ) {}

  async listAll() {
    return await this._userMongo.all();
  }

  async create(input: CreateUserDto) {
    return await this._createUser.execute(input);
  }

  async delete(email: string) {
    return await this._userMongo.delete(email);
  }

  async update(input: UpdateUserDto) {
    return await this._userMongo.update(input);
  }
}
