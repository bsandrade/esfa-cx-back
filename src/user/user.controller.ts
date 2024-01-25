import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserModel } from './models/create-user.model';

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
}
