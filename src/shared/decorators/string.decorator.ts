import { applyDecorators } from '@nestjs/common';
import { IsString } from 'class-validator';

export function StringValidate() {
  return applyDecorators(
    IsString({
      message: '$property obrigatório',
    }),
  );
}
