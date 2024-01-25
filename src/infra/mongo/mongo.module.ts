import { Module, Provider } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModel, UserModelSchema } from './entities/user.entity';
import { UserRepository } from './repositories';

const providers: Provider[] = [UserRepository];

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URL),
    MongooseModule.forFeature([
      { name: UserModel.name, schema: UserModelSchema },
    ]),
  ],
  providers,
  exports: providers,
})
export class MongoModule {}
