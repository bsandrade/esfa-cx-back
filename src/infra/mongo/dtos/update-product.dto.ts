import { ProductSegmentType } from '../entities/product.entity';

export type UpdateProductDto = {
  id: string;
  name?: string;
  price?: number;
  oldPrice?: number;
  type?: ProductSegmentType;
};
