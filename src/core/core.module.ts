import { Global, Module, Provider } from '@nestjs/common';
import {
  CreateProductUsecase,
  CreateUserUsecase,
  UpdateProductUsecase,
} from './use-cases';

const providers: Provider[] = [
  CreateUserUsecase,
  CreateProductUsecase,
  UpdateProductUsecase,
];

@Global()
@Module({
  providers,
  exports: providers,
})
export class CoreModule {}
