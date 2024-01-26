import { AuthUsecase } from '@core/use-cases';
import { AuthDto } from '@infra/mongo/dtos/auth.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor(private readonly _authUsecase: AuthUsecase) {}

  async signIn(input: AuthDto) {
    return await this._authUsecase.execute(input);
  }
}
