import { UserEntity } from '@users/domain/entities/user.entity';

export interface IAddUsersUsecaseInput {
  payload: IAddUsersPayloadV1UsecaseInput;
}

export type IAddUsersPayloadV1UsecaseInput = Partial<UserEntity>;
