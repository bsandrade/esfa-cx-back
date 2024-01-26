import { applyDecorators } from '@nestjs/common';
import { IsNumber, IsOptional } from 'class-validator';

export function NumberOptionalValidate() {
  return applyDecorators(
    IsOptional(),
    IsNumber(
      {
        allowNaN: false,
        allowInfinity: false,
        maxDecimalPlaces: 2,
      },
      {
        message: '$property precisa ser um número',
      },
    ),
  );
}
