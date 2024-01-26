import { CreateUserDto } from '@infra/mongo/dtos/create-user.dto';
import { UserRepository } from '@infra/mongo/repositories';
import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class CreateUserUsecase {
  constructor(private readonly _userMongo: UserRepository) {}

  async execute({ email, googleId }: CreateUserDto) {
    const userExists = await this._userMongo.getByEmail(email);
    if (userExists) {
      throw new BadRequestException('Usuário existe');
    }

    return await this._userMongo.create({ email, googleId });
  }
}
