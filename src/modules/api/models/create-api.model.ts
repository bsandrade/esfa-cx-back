import { StringValidate } from '@shared/decorators';

export class CreateApiModel {
  @StringValidate()
  name: string;
}
