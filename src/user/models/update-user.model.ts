import {
  BooleanOptionalValidate,
  StringOptionalValidate,
} from '@shared/decorators';

export class UpdateUserModel {
  @StringOptionalValidate()
  name?: string;
  @StringOptionalValidate()
  photo?: string;
  @BooleanOptionalValidate()
  isAdmin?: boolean;
  @BooleanOptionalValidate()
  active?: boolean;
}
