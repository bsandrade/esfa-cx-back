import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthModel } from './models/auth.model';

@Controller({
  version: '1',
  path: 'auth',
})
export class AuthController {
  constructor(private readonly _authService: AuthService) {}

  @Post()
  async auth(@Body() input: AuthModel) {
    return await this._authService.signIn(input);
  }
}
