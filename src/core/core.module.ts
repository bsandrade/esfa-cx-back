import { Global, Module, Provider } from '@nestjs/common';
import {
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
];

@Global()
@Module({
  providers,
  exports: providers,
})
export class CoreModule {}
