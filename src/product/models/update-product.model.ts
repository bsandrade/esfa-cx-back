import { ProductSegmentType } from '@infra/mongo/entities/product.entity';
import { StringOptionalValidate } from '@shared/decorators';
import { NumberOptionalValidate } from '@shared/decorators/number-optional.decorator';

export class UpdateProductModel {
  @StringOptionalValidate()
  name?: string;
  @NumberOptionalValidate()
  price?: number;
  @NumberOptionalValidate()
  oldPrice?: number;
  @StringOptionalValidate()
  type?: ProductSegmentType;
}
