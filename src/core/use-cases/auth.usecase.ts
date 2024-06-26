import { AuthDto } from '@infra/mongo/dtos/auth.dto';
import { UserRepository } from '@infra/mongo/repositories';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthUsecase {
  constructor(
    private readonly _userMongo: UserRepository,
    private readonly _jwtService: JwtService,
  ) {}

  async execute(input: AuthDto) {
    const user = await this._userMongo.getByEmail(input.email);
    if (!user) {
      throw new UnauthorizedException('Usuário inválido');
    }

    if (!user.isAdmin) {
      throw new UnauthorizedException('Somente admins podem realizar o login');
    }

    const payload = { sub: user.email, isAdmin: user.isAdmin };
    return {
      access_token: await this._jwtService.signAsync(payload),
    };
  }
}
