import { StringValidate } from '@shared/decorators';

export class AuthModel {
  @StringValidate()
  email: string;
}
