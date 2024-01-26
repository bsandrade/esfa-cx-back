import { Module } from '@nestjs/common';
import { InfraModule } from './infra/infra.module';
import { CoreModule } from './core/core.module';
import { ApiModule, AuthModule, ProductModule, UserModule } from './modules';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from '@shared/guards/jwt/jwt.strategy';
import { JwtAuthGuard } from '@shared/guards/jwt/jwt.guard';
import { JwtAdminAuthGuard } from '@shared/guards/jwt-admin/jwt-admin.guard';
import { JwtAdminStrategy } from '@shared/guards/jwt-admin/jwt.strategy';
import { APP_GUARD } from '@nestjs/core';
import { ApiGuard } from '@shared/guards/api/api.guard';

@Module({
  imports: [
    InfraModule,
    PassportModule,
    CoreModule,
    UserModule,
    ProductModule,
    AuthModule,
    ApiModule,
  ],
  controllers: [],
  providers: [
    JwtAuthGuard,
    JwtStrategy,
    JwtAdminAuthGuard,
    JwtAdminStrategy,
    {
      provide: APP_GUARD,
      useClass: ApiGuard,
    },
  ],
})
export class AppModule {}
