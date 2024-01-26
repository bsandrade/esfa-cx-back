import { ApiRepository } from '@infra/mongo/repositories';
import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
} from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class ApiGuard implements CanActivate {
  constructor(private readonly _apiMongo: ApiRepository) {}

  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest<Request>();
    const key = request.headers['x-api-key'] as string;
    const apiExists = await this._apiMongo.getByKey(key);

    if (!apiExists) {
      throw new ForbiddenException('api-key inválida');
    }

    return true;
  }
}
