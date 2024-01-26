import { ApiModelDocument } from '../entities/api.entity';

export class ApiMapper {
  static toDomain(input: ApiModelDocument) {
    return {
      key: input.key,
      name: input.name,
    };
  }
}
