import { applyDecorators } from '@nestjs/common';
import { IsNumber } from 'class-validator';

export function NumberValidate() {
  return applyDecorators(
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
