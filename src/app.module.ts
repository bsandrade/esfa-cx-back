import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { InfraModule } from './infra/infra.module';

@Module({
  imports: [InfraModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
