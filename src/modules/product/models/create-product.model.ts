import { ProductSegmentType } from '@infra/mongo/entities/product.entity';
import { NumberValidate, StringValidate } from '@shared/decorators';
import { NumberOptionalValidate } from '@shared/decorators/number-optional.decorator';

export class CreateProductModel {
  @StringValidate()
  name: string;
  @NumberValidate()
  price: number;
  @NumberOptionalValidate()
  oldPrice?: number;
  @StringValidate()
  type: ProductSegmentType;
}
