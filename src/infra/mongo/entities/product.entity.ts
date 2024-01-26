import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
export type ProductSegmentType = 'drink' | 'food' | 'both';

@Schema({
  collection: 'products',
  timestamps: true,
})
export class ProductModel {
  @Prop({ unique: true })
  id: string;
  @Prop()
  name: string;
  @Prop()
  price: number;
  @Prop()
  oldPrice?: number;
  @Prop()
  type: ProductSegmentType;
}

export type ProductModelDocument = ProductModel & Document;
export const ProductModelSchema = SchemaFactory.createForClass(ProductModel);
