import { BadRequestException } from '@nestjs/common';
import { FullPartial } from '@shared/application/types/partial.types';
import { joiSchemaValidatorUtil } from '@shared/application/utils/joi/joi-schema-validator.util';
import { usersCreateJoiSchema } from '@users/application/validators/users.create.joi.validator';
import { assign, get, head } from 'lodash';

export class UserEntity {
  public id?: string;
  public name: string;
  public increment_id: number;
  public constructor(partial: FullPartial<UserEntity>) {
    assign(this, partial);
  }

  public createValidation(): undefined | UserEntity {
    const { error, value } = joiSchemaValidatorUtil<UserEntity, UserEntity>(
      usersCreateJoiSchema,
      this,
    );

    if (error)
      throw new BadRequestException(
        get(head(get(error, 'details')), 'message'),
      );

    return value;
  }
}
