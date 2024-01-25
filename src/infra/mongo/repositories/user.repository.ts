import { InjectModel } from '@nestjs/mongoose';
import { UserModel, UserModelDocument } from '../entities/user.entity';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateUserDto } from '../dtos/create-user.dto';
import { UserMapper } from '../mappers/user.mapper';
import { UpdateUserDto } from '../dtos/update-user.dto';

@Injectable()
export class UserRepository {
  constructor(
    @InjectModel(UserModel.name)
    private _userModel: Model<UserModelDocument>,
  ) {}

  async create(input: CreateUserDto) {
    const novoCadastro = await this._userModel.create(input);

    const doc = await novoCadastro.save();

    return UserMapper.toDomain(doc);
  }

  async all() {
    const docs = await this._userModel.find().exec();
    return docs.map((doc) => UserMapper.toDomain(doc));
  }

  async getByEmail(email: string) {
    const doc = await this._userModel.findOne({ email }).exec();
    if (doc) {
      return UserMapper.toDomain(doc);
    }
    return undefined;
  }

  async delete(email: string) {
    await this._userModel.deleteOne({ email });
  }

  async update({ email, active, isAdmin, name, photo }: UpdateUserDto) {
    await this._userModel.updateOne(
      {
        email,
      },
      {
        $set: {
          email,
          active,
          isAdmin,
          name,
          photo,
        },
      },
    );
  }
}
