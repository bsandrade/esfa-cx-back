import { Global, Module } from '@nestjs/common';
import { MongoModule } from './mongo/mongo.module';

@Global()
@Module({
  imports: [MongoModule],
  providers: [MongoModule],
  exports: [MongoModule],
})
export class InfraModule {}
