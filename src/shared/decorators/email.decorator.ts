import { applyDecorators } from '@nestjs/common';
import { IsEmail } from 'class-validator';

export function EmailValidate() {
  return applyDecorators(
    IsEmail(
      {},
      {
        message: '$property obrigatório',
      },
    ),
  );
}
