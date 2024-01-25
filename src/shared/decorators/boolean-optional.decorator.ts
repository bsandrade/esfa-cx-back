import { applyDecorators } from '@nestjs/common';
import { IsBoolean, IsOptional } from 'class-validator';

export function BooleanOptionalValidate() {
  return applyDecorators(
    IsOptional(),
    IsBoolean({
      message: '$property obrigatório',
    }),
  );
}
