import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserModel } from './models/create-user.model';
import { UpdateUserModel } from './models/update-user.model';

@Controller({
  version: '1',
  path: 'users',
})
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() input: CreateUserModel) {
    return await this.userService.create(input);
  }

  @Get()
  async all() {
    return await this.userService.listAll();
  }

  @Delete(':email')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('email') email: string) {
    await this.userService.delete(email);
  }

  @Put(':email')
  async update(@Param('email') email: string, @Body() input: UpdateUserModel) {
    await this.userService.update({
      ...input,
      email,
    });
  }
}
