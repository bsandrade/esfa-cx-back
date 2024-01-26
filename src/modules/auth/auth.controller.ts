import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthModel } from './models/auth.model';
import { AuthAppModel } from './models/auth-app.model';

@Controller({
  version: '1',
  path: 'auth',
})
export class AuthController {
  constructor(private readonly _authService: AuthService) {}

  @Post('app')
  async authApp(@Body() input: AuthAppModel) {
    return await this._authService.signInMobile(input);
  }

  @Post()
  async auth(@Body() input: AuthModel) {
    return await this._authService.signIn(input);
  }
}
