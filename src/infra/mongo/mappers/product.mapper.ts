import { ProductModelDocument } from '../entities/product.entity';

export class ProductMapper {
  static toDomain(input: ProductModelDocument) {
    return {
      id: input.id,
      name: input.name,
      price: input.price,
      oldPrice: input.oldPrice,
      type: input.type,
    };
  }
}
