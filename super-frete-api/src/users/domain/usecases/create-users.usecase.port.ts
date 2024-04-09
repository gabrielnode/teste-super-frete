import { IUsecase } from '@shared/application/usecases/use-case.interface';
import { FullPartial } from '@shared/application/types/partial.types';
import { IAddUsersUsecaseInput } from '@users/application/types/usecases/add-user.type';
import { UserEntity } from '@users/domain/entities/user.entity';

export type IAddUsersUsecase<
  Output = FullPartial<UserEntity>,
  Input = IAddUsersUsecaseInput,
> = IUsecase<Output, Input>;
