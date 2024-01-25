import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { InfraModule } from './infra/infra.module';
import { CoreModule } from './core/core.module';

@Module({
  imports: [InfraModule, CoreModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
