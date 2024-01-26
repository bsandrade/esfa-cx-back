import { StringValidate } from '@shared/decorators';

export class AuthAppModel {
  @StringValidate()
  email: string;
  @StringValidate()
  googleId: string;
  @StringValidate()
  name: string;
  @StringValidate()
  photo: string;
}
