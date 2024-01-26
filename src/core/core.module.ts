import { Global, Module, Provider } from '@nestjs/common';
import {
  AuthAppUsecase,
  AuthUsecase,
  CreateApiUsecase,
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
  CreateApiUsecase,
];

@Global()
@Module({
  providers,
  exports: providers,
})
export class CoreModule {}
