import * as joi from 'joi';
import { UserEntity } from '@users/domain/entities/user.entity';

export const usersCreateJoiSchema = joi.object<UserEntity>({
  name: joi.string().required(),
});
