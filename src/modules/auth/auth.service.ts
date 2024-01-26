import { AuthAppUsecase, AuthUsecase } from '@core/use-cases';
import { AuthAppDto } from '@infra/mongo/dtos/auth-app.dto';
import { AuthDto } from '@infra/mongo/dtos/auth.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor(
    private readonly _authUsecase: AuthUsecase,
    private readonly _authAppUsecase: AuthAppUsecase,
  ) {}

  async signIn(input: AuthDto) {
    return await this._authUsecase.execute(input);
  }

  async signInMobile(input: AuthAppDto) {
    return await this._authAppUsecase.execute(input);
  }
}
