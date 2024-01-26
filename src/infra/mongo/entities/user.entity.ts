import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  collection: 'users',
  timestamps: true,
})
export class UserModel {
  @Prop({ default: 'no-name' })
  name?: string;
  @Prop({ unique: true })
  email: string;
  @Prop()
  photo?: string;
  @Prop({ default: false })
  isAdmin: boolean;
  @Prop({ default: true })
  active: boolean;
}

export type UserModelDocument = UserModel & Document;
export const UserModelSchema = SchemaFactory.createForClass(UserModel);
