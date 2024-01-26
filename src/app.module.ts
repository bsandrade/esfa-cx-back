import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { InfraModule } from './infra/infra.module';
import { CoreModule } from './core/core.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [InfraModule, CoreModule, UserModule, ProductModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
