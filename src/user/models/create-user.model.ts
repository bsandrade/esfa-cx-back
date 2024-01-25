import { EmailValidate } from '@shared/decorators';

export class CreateUserModel {
  @EmailValidate()
  email: string;
}
