import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({
  collection: 'apis',
  timestamps: true,
})
export class ApiModel {
  @Prop()
  key: string;
  @Prop()
  name: string;
}

export type ApiModelDocument = Document & ApiModel;
export const ApiModelSchema = SchemaFactory.createForClass(ApiModel);
