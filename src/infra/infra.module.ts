import { Global, Module } from '@nestjs/common';
import { MongoModule } from './mongo/mongo.module';
import { JwtModule } from '@nestjs/jwt';

@Global()
@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '24h' },
    }),
    MongoModule,
  ],
  providers: [MongoModule],
  exports: [MongoModule],
})
export class InfraModule {}
