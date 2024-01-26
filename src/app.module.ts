import { Module } from '@nestjs/common';
import { InfraModule } from './infra/infra.module';
import { CoreModule } from './core/core.module';
import { AuthModule, ProductModule, UserModule } from './modules';

@Module({
  imports: [InfraModule, CoreModule, UserModule, ProductModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
