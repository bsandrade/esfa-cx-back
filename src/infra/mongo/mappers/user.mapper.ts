import { UserModelDocument } from '../entities/user.entity';

export class UserMapper {
  static toDomain(input: UserModelDocument) {
    return {
      name: input.name,
      email: input.email,
      photo: input.photo,
      isAdmin: input.isAdmin,
      active: input.active,
      googleId: input.googleId,
    };
  }
}
