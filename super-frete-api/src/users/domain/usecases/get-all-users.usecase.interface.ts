import { IUsecase } from '@shared/application/usecases/use-case.interface';
import { FullPartial } from '@shared/application/types/partial.types';
import { UserEntity } from '@users/domain/entities/user.entity';

export type IGetAllUsersUsecase<
  Output = FullPartial<UserEntity[]>,
  Input = void,
> = IUsecase<Output, Input>;
