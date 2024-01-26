import { Global, Module, Provider } from '@nestjs/common';
import {
  AuthAppUsecase,
  AuthUsecase,
  CreateProductUsecase,
  CreateUserUsecase,
  UpdateProductUsecase,
} from './use-cases';

const providers: Provider[] = [
  CreateUserUsecase,
  CreateProductUsecase,
  UpdateProductUsecase,
  AuthUsecase,
  AuthAppUsecase,
];

@Global()
@Module({
  providers,
  exports: providers,
})
export class CoreModule {}
