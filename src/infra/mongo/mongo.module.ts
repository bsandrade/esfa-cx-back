import { Module, Provider } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModel, UserModelSchema } from './entities/user.entity';
import {
  ApiRepository,
  ProductRepository,
  UserRepository,
} from './repositories';
import { ProductModel, ProductModelSchema } from './entities/product.entity';
import { ApiModel, ApiModelSchema } from './entities/api.entity';

const providers: Provider[] = [
  UserRepository,
  ProductRepository,
  ApiRepository,
];

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URL),
    MongooseModule.forFeature([
      { name: UserModel.name, schema: UserModelSchema },
      { name: ProductModel.name, schema: ProductModelSchema },
      { name: ApiModel.name, schema: ApiModelSchema },
    ]),
  ],
  providers,
  exports: providers,
})
export class MongoModule {}
