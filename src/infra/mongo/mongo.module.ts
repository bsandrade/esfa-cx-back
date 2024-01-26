import { Module, Provider } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModel, UserModelSchema } from './entities/user.entity';
import { ProductRepository, UserRepository } from './repositories';
import { ProductModel, ProductModelSchema } from './entities/product.entity';

const providers: Provider[] = [UserRepository, ProductRepository];

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URL),
    MongooseModule.forFeature([
      { name: UserModel.name, schema: UserModelSchema },
      { name: ProductModel.name, schema: ProductModelSchema },
    ]),
  ],
  providers,
  exports: providers,
})
export class MongoModule {}
