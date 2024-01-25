import { Global, Module, Provider } from '@nestjs/common';
import { CreateUserUsecase } from './use-cases/create-user.usecase';

const providers: Provider[] = [CreateUserUsecase];

@Global()
@Module({
  providers,
  exports: providers,
})
export class CoreModule {}
