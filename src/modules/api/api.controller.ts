import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiService } from './api.service';
import { CreateApiModel } from './models/create-api.model';
import { JwtAdminAuthGuard } from '@shared/guards/jwt-admin/jwt-admin.guard';

@Controller({
  version: '1',
  path: 'api',
})
export class ApiController {
  constructor(private readonly _apiService: ApiService) {}

  @UseGuards(JwtAdminAuthGuard)
  @Post()
  async create(@Body() input: CreateApiModel) {
    return await this._apiService.create(input);
  }

  @UseGuards(JwtAdminAuthGuard)
  @Get()
  async all() {
    return await this._apiService.all();
  }
}
