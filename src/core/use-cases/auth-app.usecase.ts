import { AuthAppDto } from '@infra/mongo/dtos/auth-app.dto';
import { UserRepository } from '@infra/mongo/repositories';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthAppUsecase {
  constructor(
    private readonly _userMongo: UserRepository,
    private readonly _jwtService: JwtService,
  ) {}

  async execute({ email, googleId, name, photo }: AuthAppDto) {
    const user = await this._userMongo.getByEmail(email);
    if (!user) {
      throw new UnauthorizedException('Usuário inválido');
    }

    await this._userMongo.update({
      email,
      googleId,
      name,
      photo,
    });

    const payload = {
      sub: user.email,
      googleId,
    };
    return {
      access_token: await this._jwtService.signAsync(payload),
    };
  }
}
