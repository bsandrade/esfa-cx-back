import { EmailValidate, StringValidate } from '@shared/decorators';

export class CreateUserModel {
  @EmailValidate()
  email: string;
  @StringValidate()
  googleId: string;
}
