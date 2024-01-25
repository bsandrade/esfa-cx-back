import { applyDecorators } from '@nestjs/common';
import { IsOptional, IsString } from 'class-validator';

export function StringOptionalValidate() {
  return applyDecorators(
    IsOptional(),
    IsString({
      message: '$property obrigatório',
    }),
  );
}
